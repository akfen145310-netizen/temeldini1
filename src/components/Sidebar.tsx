import React, { useState } from 'react';
import { Unit, SubTopic } from '../types';
import { ChevronDown, ChevronRight, Search, CheckCircle2, Star, Sparkles, BookOpen, Layers } from 'lucide-react';
import { sound } from '../utils/audio';

interface SidebarProps {
  units: Unit[];
  activeSubTopicId: string;
  onSelectSubTopic: (id: string) => void;
  completedSubTopicIds: string[];
  subTopicScores: Record<string, number>;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  units,
  activeSubTopicId,
  onSelectSubTopic,
  completedSubTopicIds,
  subTopicScores,
  isOpenMobile,
  onCloseMobile,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedUnits, setExpandedUnits] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const toggleUnit = (unitId: number) => {
    sound.playClick();
    setExpandedUnits((prev) => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  // Filter topics based on search
  const filteredUnits = units.map((u) => {
    if (!searchTerm.trim()) return u;
    const term = searchTerm.toLowerCase();
    const matchingTopics = u.subTopics.filter(
      (st) =>
        st.title.toLowerCase().includes(term) ||
        st.number.toLowerCase().includes(term) ||
        st.keyConcepts.some((c) => c.toLowerCase().includes(term)) ||
        st.summary.toLowerCase().includes(term)
    );
    return { ...u, subTopics: matchingTopics };
  });

  const totalTopicsCount = units.reduce((acc, u) => acc + u.subTopics.length, 0);
  const completedCount = completedSubTopicIds.length;
  const progressPercent = Math.round((completedCount / totalTopicsCount) * 100);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed lg:sticky top-18 left-0 z-40 h-[calc(100vh-4.5rem)] w-80 sm:w-88 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Search & Curriculum Progress */}
        <div className="p-4 border-b border-slate-100 space-y-3 bg-slate-50/50">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Konu, kavram veya ayet ara..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Progress overview bar */}
          <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                Müfredat İlerlemesi
              </span>
              <span className="text-emerald-700 font-bold">
                {completedCount}/{totalTopicsCount} (%{progressPercent})
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Units and Topics List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {filteredUnits.map((unit) => {
            const isExpanded = expandedUnits[unit.id] ?? true;
            const hasVisibleTopics = unit.subTopics.length > 0;
            if (!hasVisibleTopics && searchTerm) return null;

            return (
              <div key={unit.id} className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs">
                {/* Unit Header */}
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className="w-full text-left p-3 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors cursor-pointer bg-slate-50/70 border-b border-slate-100"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-2xs ${
                        unit.id === 1
                          ? 'bg-emerald-600'
                          : unit.id === 2
                          ? 'bg-sky-600'
                          : unit.id === 3
                          ? 'bg-amber-600'
                          : 'bg-violet-600'
                      }`}
                    >
                      {unit.id}
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-slate-900 leading-tight">
                        {unit.title}
                      </h2>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {unit.badge}
                      </span>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {/* SubTopics */}
                {isExpanded && (
                  <div className="p-1.5 space-y-1">
                    {unit.subTopics.map((topic) => {
                      const isActive = topic.id === activeSubTopicId;
                      const isCompleted = completedSubTopicIds.includes(topic.id);
                      const topicScore = subTopicScores[topic.id] || 0;

                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            sound.playClick();
                            onSelectSubTopic(topic.id);
                            onCloseMobile();
                          }}
                          className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all flex items-start justify-between gap-2 cursor-pointer ${
                            isActive
                              ? 'bg-emerald-500 text-white font-semibold shadow-xs shadow-emerald-500/20'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[11px] font-bold shrink-0 ${
                                isActive
                                  ? 'bg-white/20 text-white'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {topic.number}
                            </span>
                            <div className="leading-snug">
                              <span className="block line-clamp-1">{topic.title}</span>
                              <span
                                className={`text-[10px] block mt-0.5 ${
                                  isActive ? 'text-emerald-100' : 'text-slate-400'
                                }`}
                              >
                                {topic.keyConcepts.slice(0, 3).join(' • ')}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0 pt-0.5">
                            {isCompleted ? (
                              <CheckCircle2
                                className={`w-4 h-4 ${
                                  isActive ? 'text-white' : 'text-emerald-500'
                                }`}
                              />
                            ) : topicScore > 0 ? (
                              <span
                                className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                                  isActive
                                    ? 'bg-white/20 text-white'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {topicScore}P
                              </span>
                            ) : null}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};
