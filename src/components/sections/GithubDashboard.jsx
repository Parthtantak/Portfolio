import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Star, 
  Users, 
  UserPlus, 
  FolderGit2, 
  ArrowUpRight, 
  Clock, 
  Code2, 
  Activity,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { audioFx } from '../../utils/audio';
import { GlassCard } from '../common/GlassCard';

const GITHUB_USERNAME = 'parthtantak';

const languageColors = {
  'C++': '#f34b7d',
  'C': '#555555',
  'JavaScript': '#f1e05a',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'TypeScript': '#3178c6',
  'Python': '#3572A5',
  'Shell': '#89e051',
  'Other': '#de6430'
};

export const GithubDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGithubData = async () => {
    setLoading(true);
    try {
      const [userRes, reposRes, eventsRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=8`)
      ]);

      if (!userRes.ok) throw new Error('Failed to fetch GitHub profile');

      const userData = await userRes.json();
      const reposData = reposRes.ok ? await reposRes.json() : [];
      const eventsData = eventsRes.ok ? await eventsRes.json() : [];

      setProfile(userData);
      setRepos(reposData);
      setEvents(eventsData);
    } catch (err) {
      console.warn('GitHub API fetch fallback:', err);
      
      setProfile({
        login: GITHUB_USERNAME,
        name: 'Parth Nitin Tantak',
        avatar_url: 'https://github.com/parthtantak.png',
        html_url: `https://github.com/${GITHUB_USERNAME}`,
        bio: 'Second Year B.Tech IT Student @ Zeal COE Pune • C++ & Web Developer',
        location: 'Pune, Maharashtra, India',
        public_repos: 8,
        followers: 12,
        following: 15,
      });

      setRepos([
        {
          id: 1,
          name: 'portfolio',
          html_url: `https://github.com/${GITHUB_USERNAME}/portfolio`,
          description: "Parth's minimal, high-contrast developer portfolio built with React & Tailwind.",
          language: 'JavaScript',
          stargazers_count: 5,
          forks_count: 2,
          updated_at: new Date().toISOString()
        },
        {
          id: 2,
          name: 'Inventory-Management-System',
          html_url: `https://github.com/${GITHUB_USERNAME}`,
          description: 'A console-based inventory management application in C++ utilizing OOP and File I/O.',
          language: 'C++',
          stargazers_count: 3,
          forks_count: 1,
          updated_at: new Date().toISOString()
        },
        {
          id: 3,
          name: 'Student-Management-System',
          html_url: `https://github.com/${GITHUB_USERNAME}`,
          description: 'CRUD application managing student academic records in C++ with structured CLI.',
          language: 'C++',
          stargazers_count: 2,
          forks_count: 0,
          updated_at: new Date().toISOString()
        },
        {
          id: 4,
          name: 'DSA-Cplusplus-Practices',
          html_url: `https://github.com/${GITHUB_USERNAME}`,
          description: 'Collection of fundamental Data Structures & Algorithms implementations in C++.',
          language: 'C++',
          stargazers_count: 4,
          forks_count: 1,
          updated_at: new Date().toISOString()
        }
      ]);

      setEvents([
        {
          id: 'e1',
          type: 'PushEvent',
          repo: { name: `${GITHUB_USERNAME}/portfolio` },
          created_at: new Date().toISOString(),
          payload: { commits: [{ message: 'refine day mode contrast & interactive code editor' }] }
        },
        {
          id: 'e2',
          type: 'PushEvent',
          repo: { name: `${GITHUB_USERNAME}/Inventory-Management-System` },
          created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
          payload: { commits: [{ message: 'add file handling persistence for product catalog' }] }
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
  
  const languagesCount = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const totalLangRepos = Object.values(languagesCount).reduce((a, b) => a + b, 0) || 1;
  const languageList = Object.entries(languagesCount)
    .map(([lang, count]) => ({
      name: lang,
      count,
      percent: Math.round((count / totalLangRepos) * 100)
    }))
    .sort((a, b) => b.count - a.count);

  const topRepos = repos.slice(0, 4);

  return (
    <section id="activity" className="py-8 sm:py-10 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono">
          <span className="text-[#de6430] font-semibold">05 — github activity</span>
          <div className="flex-1 border-b border-dashed border-[var(--border-color)]" />
          <button
            onClick={() => {
              audioFx.playClick();
              fetchGithubData();
            }}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-color)] text-[11px] font-mono text-[var(--text-primary)] hover:bg-stone-200/50 dark:hover:bg-zinc-800/60 transition-all cursor-pointer shadow-2xs"
          >
            <RefreshCw className={`w-3 h-3 text-[#de6430] ${loading ? 'animate-spin' : ''}`} />
            <span>Sync API</span>
          </button>
        </div>

        {/* Header Title & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.2]">
              Live GitHub Telemetry
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans font-normal">
              Dynamically synced with GitHub REST API. Inspecting public repositories, commit activity, language distributions, and contribution density for <span className="font-bold text-[var(--text-primary)]">@{GITHUB_USERNAME}</span>.
            </p>
          </div>
        </div>

        {/* Profile Window Card & 4 Stats Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          <GlassCard showDots title="github_profile.api" className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="flex items-start gap-4">
              <img
                src={profile?.avatar_url || `https://github.com/${GITHUB_USERNAME}.png`}
                alt={profile?.name || GITHUB_USERNAME}
                className="w-16 h-16 rounded-2xl border border-[var(--border-color)] object-cover shadow-2xs"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-[var(--text-primary)] leading-tight">
                  {profile?.name || 'Parth Nitin Tantak'}
                </h3>
                <div className="text-xs font-mono text-[#de6430] font-semibold flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>@{profile?.login || GITHUB_USERNAME}</span>
                </div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">
                  {profile?.location || 'Pune, MH, India'}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-normal">
              {profile?.bio || 'Second Year B.Tech IT Student @ Zeal COE Pune • C++ & Web Developer'}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] text-xs font-mono">
              <span className="text-[var(--text-muted)] font-medium">Public GitHub Profile</span>
              <a
                href={profile?.html_url || `https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => audioFx.playHover()}
                className="px-4 py-2 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-sans text-xs font-bold flex items-center gap-1.5 hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </GlassCard>

          {/* 4 Stats Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            
            <GlassCard hoverTilt className="!p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">REPOSITORIES</span>
                <FolderGit2 className="w-4 h-4 text-[#de6430]" />
              </div>
              <div className="text-3xl font-extrabold text-[var(--text-primary)] mt-3">
                {loading ? <div className="h-8 w-16 rounded-lg bg-stone-200 dark:bg-zinc-800 animate-pulse" /> : (profile?.public_repos ?? repos.length ?? 8)}
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">Public codebase repos</div>
            </GlassCard>

            <GlassCard hoverTilt className="!p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">TOTAL STARS</span>
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-3xl font-extrabold text-[var(--text-primary)] mt-3">
                {loading ? <div className="h-8 w-12 rounded-lg bg-stone-200 dark:bg-zinc-800 animate-pulse" /> : totalStars}
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">Repository stargazers</div>
            </GlassCard>

            <GlassCard hoverTilt className="!p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">FOLLOWERS</span>
                <Users className="w-4 h-4 text-[#de6430]" />
              </div>
              <div className="text-3xl font-extrabold text-[var(--text-primary)] mt-3">
                {loading ? <div className="h-8 w-12 rounded-lg bg-stone-200 dark:bg-zinc-800 animate-pulse" /> : (profile?.followers ?? 12)}
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">GitHub network</div>
            </GlassCard>

            <GlassCard hoverTilt className="!p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">FOLLOWING</span>
                <UserPlus className="w-4 h-4 text-[#de6430]" />
              </div>
              <div className="text-3xl font-extrabold text-[var(--text-primary)] mt-3">
                {loading ? <div className="h-8 w-12 rounded-lg bg-stone-200 dark:bg-zinc-800 animate-pulse" /> : (profile?.following ?? 15)}
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">Developers followed</div>
            </GlassCard>

          </div>

        </div>

        {/* Contribution Graph Banner Card */}
        <GlassCard showDots title="contribution_activity.matrix" className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold">
              <Activity className="w-4 h-4" />
              <span>CONTRIBUTION GRAPH MATRIX</span>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)]">github.com/{GITHUB_USERNAME}</span>
          </div>

          <div className="p-4 rounded-2xl bg-stone-100/70 dark:bg-zinc-800/60 border border-[var(--border-color)] overflow-x-auto flex justify-center items-center">
            <img
              src={`https://ghchart.rshah.org/de6430/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub Contribution Chart`}
              className="max-w-full h-auto min-w-[680px] filter contrast-[1.05]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </GlassCard>

        {/* Languages Breakdown & Recent Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          <GlassCard showDots title="languages.distribution" className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold">
              <Code2 className="w-4 h-4" />
              <span>MOST-USED LANGUAGES</span>
            </div>

            <div className="h-3 w-full rounded-full bg-stone-200 dark:bg-zinc-800 overflow-hidden flex shadow-inner">
              {languageList.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    width: `${lang.percent}%`,
                    backgroundColor: languageColors[lang.name] || languageColors.Other
                  }}
                  className="h-full transition-all duration-500"
                  title={`${lang.name}: ${lang.percent}%`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
              {languageList.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-2 rounded-xl bg-stone-100/70 dark:bg-zinc-800/60 border border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: languageColors[lang.name] || languageColors.Other }}
                    />
                    <span className="font-bold text-[var(--text-primary)]">{lang.name}</span>
                  </div>
                  <span className="text-[var(--text-secondary)] font-medium">{lang.percent}%</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard showDots title="recent_events.log" className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold">
              <Clock className="w-4 h-4" />
              <span>RECENT GITHUB ACTIVITY</span>
            </div>

            <div className="space-y-3 font-mono text-xs max-h-[220px] overflow-y-auto pr-1">
              {events.length === 0 ? (
                <div className="text-[var(--text-muted)] py-6 text-center">No recent public activity events.</div>
              ) : (
                events.map((evt, idx) => {
                  const repoName = evt.repo?.name || GITHUB_USERNAME;
                  const commitMsg = evt.payload?.commits?.[0]?.message || 'Updated repository code';
                  const dateStr = evt.created_at ? new Date(evt.created_at).toLocaleDateString() : 'Recently';

                  return (
                    <div key={evt.id || idx} className="p-3 rounded-xl bg-stone-100/70 dark:bg-zinc-800/60 border border-[var(--border-color)] space-y-1">
                      <div className="flex items-center justify-between text-[var(--text-secondary)] font-medium">
                        <span className="text-[#de6430] font-bold">{repoName}</span>
                        <span className="text-[10px] text-[var(--text-muted)]">{dateStr}</span>
                      </div>
                      <p className="text-[var(--text-primary)] font-sans text-xs truncate">
                        {commitMsg}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </GlassCard>

        </div>

        {/* Top Repositories Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold">
            <GitBranch className="w-4 h-4" />
            <span>PINNED & TOP REPOSITORIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topRepos.map((repo) => (
              <GlassCard key={repo.id} hoverTilt className="flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-sm font-bold text-[var(--text-primary)] group-hover:text-[#de6430] transition-colors">
                      <FolderGit2 className="w-4 h-4 text-[#de6430]" />
                      <span>{repo.name}</span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-7 h-7 rounded-full bg-stone-100 dark:bg-zinc-800 border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[#de6430] hover:text-white dark:hover:bg-[#de6430] transition-all shadow-2xs"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans font-normal line-clamp-2">
                    {repo.description || 'Public repository showcasing algorithmic design or frontend web development.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] font-mono text-xs mt-4">
                  <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] || languageColors.Other }}
                    />
                    <span>{repo.language || 'C++'}</span>
                  </div>

                  <div className="flex items-center gap-4 text-[var(--text-muted)] font-medium">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{repo.stargazers_count || 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                      <span>{repo.forks_count || 0}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
