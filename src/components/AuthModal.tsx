import React, { useState } from 'react';
import { X, LogIn, LogOut, CheckCircle2, School, User, Hash, KeyRound, Sparkles, AlertCircle, Shield } from 'lucide-react';
import { signInWithPopup, signOut, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db, handleFirestoreError, OperationType } from '../services/firebase';
import { UserProfile, Classroom } from '../types';
import { sound } from '../utils/audio';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: FirebaseUser | null;
  userProfile: UserProfile | null;
  onProfileUpdated: (profile: UserProfile | null) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  userProfile,
  onProfileUpdated,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states for new registration or updating profile
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [className, setClassName] = useState('5-A');
  const [studentNumber, setStudentNumber] = useState('');
  const [classCode, setClassCode] = useState('DKA-5A');
  const [teacherCreatedCode, setTeacherCreatedCode] = useState('DKA-5A');

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      sound.playClick();
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user profile exists in Firestore
      const userRef = doc(db, 'users', user.uid);
      let docSnap;
      try {
        docSnap = await getDoc(userRef);
      } catch (err) {
        handleFirestoreError(err, OperationType.GET, `users/${user.uid}`);
      }

      if (docSnap && docSnap.exists()) {
        const data = docSnap.data() as UserProfile;
        onProfileUpdated(data);
        sound.playFanfare();
        onClose();
      } else {
        // Prepare prefilled fields for registration form
        setName(user.displayName || '');
      }
    } catch (err: unknown) {
      console.error('Google Sign In error:', err);
      setError('Google ile giriş yapılırken bir hata oluştu. Lütfen tekrar deneyiniz.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    setLoading(true);
    setError(null);

    const targetClassCode = (role === 'teacher' ? teacherCreatedCode : classCode).trim().toUpperCase();

    if (!targetClassCode) {
      setError('Lütfen geçerli bir öğretmen katılım kodu giriniz.');
      setLoading(false);
      return;
    }

    if (!name.trim()) {
      setError('Lütfen ad ve soyadınızı giriniz.');
      setLoading(false);
      return;
    }

    try {
      sound.playClick();
      const now = new Date().toISOString();

      // If teacher, create or verify classroom document
      if (role === 'teacher') {
        const classRef = doc(db, 'classrooms', targetClassCode);
        const classroomData: Classroom = {
          code: targetClassCode,
          teacherId: currentUser.uid,
          teacherName: name.trim(),
          school: school.trim() || 'Merkez Ortaokulu',
          className: className.trim() || '5. Sınıflar',
          studentCount: 0,
          createdAt: now,
        };
        try {
          await setDoc(classRef, classroomData, { merge: true });
        } catch (err) {
          handleFirestoreError(err, OperationType.WRITE, `classrooms/${targetClassCode}`);
        }
      } else {
        // If student, check if classroom exists or ensure a default one
        const classRef = doc(db, 'classrooms', targetClassCode);
        const classSnap = await getDoc(classRef);
        if (!classSnap.exists()) {
          // Initialize classroom stub so teacher or students can join smoothly
          await setDoc(classRef, {
            code: targetClassCode,
            teacherId: 'teacher-system',
            teacherName: 'Din Kültürü Öğretmeni',
            school: school.trim() || 'Ortaokul',
            className: className.trim() || '5. Sınıf',
            studentCount: 1,
            createdAt: now,
          });
        }
      }

      const newProfile: UserProfile = {
        userId: currentUser.uid,
        name: name.trim(),
        email: currentUser.email || '',
        role,
        school: school.trim() || 'Ortaokul',
        className: className.trim() || '5-A',
        studentNumber: studentNumber.trim() || '101',
        classCode: targetClassCode,
        totalScore: userProfile?.totalScore || 0,
        totalStars: userProfile?.totalStars || 0,
        completedTopicsCount: userProfile?.completedTopicsCount || 0,
        badges: userProfile?.badges || ['first_step'],
        createdAt: userProfile?.createdAt || now,
        updatedAt: now,
      };

      const userRef = doc(db, 'users', currentUser.uid);
      try {
        await setDoc(userRef, newProfile);
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, `users/${currentUser.uid}`);
      }

      onProfileUpdated(newProfile);
      sound.playFanfare();
      onClose();
    } catch (err) {
      console.error('Save profile error:', err);
      setError('Kayıt oluşturulurken bir hata meydana geldi.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    sound.playClick();
    await signOut(auth);
    onProfileUpdated(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white relative">
          <button
            onClick={onClose}
            id="auth-modal-close-btn"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3">
            <School className="w-6 h-6 text-emerald-100" />
          </div>
          <h2 className="text-xl font-bold">
            {currentUser && userProfile
              ? 'Öğrenci / Öğretmen Profili'
              : currentUser && !userProfile
              ? 'Sınıfına ve Atölyeye Kayıt Ol'
              : 'Google ile Giriş Yap'}
          </h2>
          <p className="text-emerald-100 text-xs mt-1">
            {currentUser && userProfile
              ? 'Etkinliklerin ve sınıf derecen bu profile kaydediliyor.'
              : 'Öğretmeninin verdiği katılım koduyla sınıfına otomatik katıl.'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
              <span>{error}</span>
            </div>
          )}

          {/* STATE 1: Already signed in and profile complete */}
          {currentUser && userProfile && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-lg flex items-center justify-center shrink-0">
                  {userProfile.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 truncate">{userProfile.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800 uppercase">
                      {userProfile.role === 'teacher' ? 'Öğretmen' : 'Öğrenci'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{userProfile.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block mb-0.5">Sınıf & Okul No</span>
                  <span className="font-bold text-slate-800">{userProfile.className} | No: {userProfile.studentNumber}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block mb-0.5">Katılım Kodu</span>
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md inline-block">
                    {userProfile.classCode}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2">
                  <span className="text-slate-500 block mb-0.5">Kayıtlı Okul</span>
                  <span className="font-semibold text-slate-800 truncate block">{userProfile.school}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-200">
                <button
                  onClick={() => {
                    // switch to edit mode
                    setName(userProfile.name);
                    setSchool(userProfile.school);
                    setClassName(userProfile.className);
                    setStudentNumber(userProfile.studentNumber);
                    setClassCode(userProfile.classCode);
                    onProfileUpdated(null); // Temporarily shows edit form with current user
                  }}
                  className="text-xs text-emerald-700 font-semibold hover:underline cursor-pointer"
                >
                  Bilgilerimi Güncelle
                </button>
                <button
                  onClick={handleSignOut}
                  id="auth-signout-btn"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Çıkış Yap</span>
                </button>
              </div>
            </div>
          )}

          {/* STATE 2: Signed in with Google, but needs registration details */}
          {currentUser && !userProfile && (
            <form onSubmit={handleRegisterProfile} className="space-y-3.5">
              <div className="flex rounded-xl bg-slate-100 p-1 mb-2">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    role === 'student' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Öğrenciyim
                </button>
                <button
                  type="button"
                  onClick={() => setRole('teacher')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    role === 'teacher' ? 'bg-white text-teal-800 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Öğretmenim
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ad Soyad
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Örn: Ayşe Yılmaz"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sınıf / Şube
                  </label>
                  <input
                    type="text"
                    required
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    placeholder="Örn: 5-A"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Okul Numarası
                  </label>
                  <div className="relative">
                    <Hash className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={studentNumber}
                      onChange={(e) => setStudentNumber(e.target.value)}
                      placeholder="Örn: 428"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Okul Adı
                </label>
                <div className="relative">
                  <School className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="Örn: Atatürk Ortaokulu"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>{role === 'teacher' ? 'Sınıf Katılım Kodu Belirle' : 'Öğretmen Katılım Kodu'}</span>
                  <span className="text-[11px] font-normal text-emerald-600">Örnek: DKA-5A</span>
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={role === 'teacher' ? teacherCreatedCode : classCode}
                    onChange={(e) =>
                      role === 'teacher'
                        ? setTeacherCreatedCode(e.target.value.toUpperCase())
                        : setClassCode(e.target.value.toUpperCase())
                    }
                    placeholder="Örn: DKA-5A"
                    className="w-full pl-9 pr-3 py-2 text-sm font-mono font-bold uppercase rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-emerald-800"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {role === 'teacher'
                    ? 'Bu kodu öğrencilerinizle paylaşarak onların bu sınıfa otomatik kaydolmasını sağlayabilirsiniz.'
                    : 'Öğretmeninizin tahtaya yazdığı veya sizinle paylaştığı katılım kodunu giriniz.'}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                id="auth-register-submit-btn"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-sm shadow-md hover:from-emerald-700 hover:to-teal-800 transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <span>Kaydediliyor...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Kaydı Tamamla ve Sınıfa Katıl</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* STATE 3: Not signed in yet */}
          {!currentUser && (
            <div className="space-y-4 text-center">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800 leading-relaxed">
                <Sparkles className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-900 mb-1">
                  Google Hesabınla Giriş Yap, Sınıfına Katıl!
                </p>
                <p className="text-slate-600">
                  Etkinlikleri tamamladıkça puan kazan, rozetleri topla, sınıfındaki sıralamanı gör ve eksiklerini telafi et.
                </p>
              </div>

              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                id="auth-google-signin-btn"
                className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm shadow-xs transition-all cursor-pointer flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>{loading ? 'Giriş Yapılıyor...' : 'Google ile Giriş Yap'}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>MEB 5. Sınıf Din Keşif Atölyesi Güvenli Oturum</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
