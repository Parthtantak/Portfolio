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
  ExternalLink,
  Building2,
  Globe,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { portfolioData } from '../../data/portfolioData';
import { audioFx } from '../../utils/audio';
import { GlassCard } from '../common/GlassCard';

const GITHUB_USERNAME = portfolioData.personal.githubUsername || 'parthtantak';
const CACHE_KEY = `gh_telemetry_cache_${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 Minutes Cache TTL

const languageColors = {
  'C++': '#f34b7d',
  'C': '#555555',
  'JavaScript': '#f1e05a',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'TypeScript': '#3178c6',
  'Python': '#3572A5',
  'Java': '#b07219',
  'Shell': '#89e051',
  'Other': '#de6430'
};

export const GithubDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGithubData = async (forceRefresh = false) => {
    setLoading(true);
    setError(null);

    // Check Cache first if forceRefresh is false
    if (!forceRefresh) {
      try {
        const cachedRaw = sessionStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (Date.now() - cached.timestamp < CACHE_TTL_MS) {
            setProfile(cached.profile);
            setRepos(cached.repos);
            setEvents(cached.events);
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.warn('Cache read error:', e);
      }
    }

    try {
      const [userRes, reposRes, eventsRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`)
      ]);

      if (!userRes.ok) {
        if (userRes.status === 403) {
          throw new Error('GitHub API rate limit exceeded. Please try again later.');
        } else if (userRes.status === 404) {
          throw new Error(`GitHub user "@${GITHUB_USERNAME}" not found.`);
        } else {
          throw new Error('Failed to fetch GitHub profile.');
        }
      }

      const userData = await userRes.json();
      const reposData = reposRes.ok ? await reposRes.json() : [];
      const eventsData = eventsRes.ok ? await eventsRes.json() : [];

      // Filter out forked repositories
      const publicOwnRepos = Array.isArray(reposData) 
        ? reposData.filter(r => !r.fork)
        : [];

      // Sort by updated_at descending
      publicOwnRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

      setProfile(userData);
      setRepos(publicOwnRepos);
      setEvents(Array.isArray(eventsData) ? eventsData : []);

      // Cache data
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          profile: userData,
          repos: publicOwnRepos,
          events: Array.isArray(eventsData) ? eventsData : []
        }));
      } catch (e) {
        console.warn('Cache write error:', e);
      }

    } catch (err) {
      console.error('GitHub API error:', err);
      setError(err.message || 'Unable to load live GitHub data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  // Dynamic Statistics
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
              fetchGithubData(true);
            }}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-color)] text-[11px] font-mono text-[var(--text-primary)] hover:bg-stone-200/50 dark:hover:bg-zinc-800/60 transition-all cursor-pointer shadow-2xs"
            title="Sync Live Data from GitHub API"
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
              Dynamically fetched via official GitHub REST API. Inspecting public repositories, commit activity, language distributions, and contribution density for <span className="font-bold text-[var(--text-primary)]">@{GITHUB_USERNAME}</span>.
            </p>
          </div>
        </div>

        {/* Error Banner state */}
        {error && !loading && (
          <GlassCard showDots title="error_log.sys" className="mb-8 p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1 max-w-md mx-auto font-sans">
              <h3 className="text-base font-bold text-[var(--text-primary)]">GitHub Telemetry Offline</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{error}</p>
            </div>
            <div className="flex items-center justify-center gap-3 font-mono text-xs pt-2">
              <button
                onClick={() => fetchGithubData(true)}
                className="px-4 py-2 rounded-full bg-[#de6430] text-white hover:bg-[#c85528] font-bold transition-all shadow-xs cursor-pointer"
              >
                Retry Request
              </button>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold transition-all shadow-2xs hover:border-[#de6430]"
              >
                Open GitHub Profile ↗
              </a>
            </div>
          </GlassCard>
        )}

        {/* Main Content (Profile & Stats) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Profile Card */}
          <GlassCard showDots title="github_profile.api" className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {loading ? (
              <div className="space-y-4 animate-pulse py-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-stone-200 dark:bg-zinc-800" />
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-3/4 rounded-md bg-stone-200 dark:bg-zinc-800" />
                    <div className="h-4 w-1/2 rounded-md bg-stone-200 dark:bg-zinc-800" />
                  </div>
                </div>
                <div className="h-12 w-full rounded-xl bg-stone-200 dark:bg-zinc-800" />
              </div>
            ) : (
              <>
                <div className="flex items-start gap-4">
                  <img
                    src={profile?.avatar_url || `https://github.com/${GITHUB_USERNAME}.png`}
                    alt={profile?.name || GITHUB_USERNAME}
                    className="w-16 h-16 rounded-2xl border border-[var(--border-color)] object-cover shadow-2xs"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold text-[var(--text-primary)] leading-tight">
                      {profile?.name || GITHUB_USERNAME}
                    </h3>
                    <div className="text-xs font-mono text-[#de6430] font-semibold flex items-center gap-1">
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>@{profile?.login || GITHUB_USERNAME}</span>
                    </div>

                    {/* Metadata: Location, Company, Blog */}
                    <div className="space-y-1 pt-1 text-[11px] font-mono text-[var(--text-muted)]">
                      {profile?.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-[#de6430]" />
                          <span>{profile.location}</span>
                        </div>
                      )}
                      {profile?.company && (
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-[#de6430]" />
                          <span>{profile.company}</span>
                        </div>
                      )}
                      {profile?.blog && (
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3 h-3 text-[#de6430]" />
                          <a href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noreferrer" className="hover:underline text-[var(--text-secondary)]">
                            {profile.blog.replace(/^https?:\/\//, '')}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans font-normal">
                  {profile?.bio || 'Public software developer profile active on GitHub.'}
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
              </>
            )}
          </GlassCard>

          {/* 4 Dynamic Stats Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            
            <GlassCard hoverTilt className="!p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">REPOSITORIES</span>
                <FolderGit2 className="w-4 h-4 text-[#de6430]" />
              </div>
              <div className="text-3xl font-extrabold text-[var(--text-primary)] mt-3">
                {loading ? <div className="h-8 w-16 rounded-lg bg-stone-200 dark:bg-zinc-800 animate-pulse" /> : (profile?.public_repos ?? repos.length)}
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
                {loading ? <div className="h-8 w-12 rounded-lg bg-stone-200 dark:bg-zinc-800 animate-pulse" /> : (profile?.followers ?? 0)}
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">GitHub network</div>
            </GlassCard>

            <GlassCard hoverTilt className="!p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[var(--text-muted)]">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">FOLLOWING</span>
                <UserPlus className="w-4 h-4 text-[#de6430]" />
              </div>
              <div className="text-3xl font-extrabold text-[var(--text-primary)] mt-3">
                {loading ? <div className="h-8 w-12 rounded-lg bg-stone-200 dark:bg-zinc-800 animate-pulse" /> : (profile?.following ?? 0)}
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">Developers followed</div>
            </GlassCard>

          </div>

        </div>

        {/* Contribution Graph Matrix Banner Card */}
        <GlassCard showDots title="contribution_activity.matrix" className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold">
              <Activity className="w-4 h-4" />
              <span>CONTRIBUTION GRAPH MATRIX</span>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)]">github.com/{GITHUB_USERNAME}</span>
          </div>

          <div className="p-4 rounded-2xl bg-stone-100/70 dark:bg-zinc-800/60 border border-[var(--border-color)] overflow-x-auto flex justify-center items-center min-h-[140px]">
            {loading ? (
              <div className="h-28 w-full rounded-xl bg-stone-200/80 dark:bg-zinc-800/80 animate-pulse" />
            ) : (
              <img
                src={`https://ghchart.rshah.org/de6430/${GITHUB_USERNAME}`}
                alt={`${GITHUB_USERNAME}'s GitHub Contribution Chart`}
                className="max-w-full h-auto min-w-[680px] filter contrast-[1.05]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
          </div>
        </GlassCard>

        {/* Languages Breakdown & Recent Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          <GlassCard showDots title="languages.distribution" className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold">
              <Code2 className="w-4 h-4" />
              <span>MOST-USED LANGUAGES</span>
            </div>

            {loading ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-3 w-full rounded-full bg-stone-200 dark:bg-zinc-800" />
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="h-10 rounded-xl bg-stone-200 dark:bg-zinc-800" />
                  <div className="h-10 rounded-xl bg-stone-200 dark:bg-zinc-800" />
                </div>
              </div>
            ) : languageList.length === 0 ? (
              <div className="text-xs font-mono text-[var(--text-muted)] py-4">No language telemetry available.</div>
            ) : (
              <>
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
              </>
            )}
          </GlassCard>

          <GlassCard showDots title="recent_events.log" className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#de6430] uppercase tracking-wider font-semibold">
              <Clock className="w-4 h-4" />
              <span>RECENT GITHUB ACTIVITY</span>
            </div>

            <div className="space-y-3 font-mono text-xs max-h-[220px] overflow-y-auto pr-1">
              {loading ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-14 rounded-xl bg-stone-200 dark:bg-zinc-800" />
                  <div className="h-14 rounded-xl bg-stone-200 dark:bg-zinc-800" />
                </div>
              ) : events.length === 0 ? (
                <div className="text-[var(--text-muted)] py-6 text-center">No recent public activity events recorded.</div>
              ) : (
                events.map((evt, idx) => {
                  const repoName = evt.repo?.name || GITHUB_USERNAME;
                  const commitMsg = evt.payload?.commits?.[0]?.message || `${evt.type.replace('Event', '')} activity`;
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
            <span>DYNAMIC PUBLIC REPOSITORIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading ? (
              <>
                <div className="h-44 rounded-2xl bg-stone-200 dark:bg-zinc-800 animate-pulse" />
                <div className="h-44 rounded-2xl bg-stone-200 dark:bg-zinc-800 animate-pulse" />
              </>
            ) : topRepos.length === 0 ? (
              <div className="col-span-2 py-8 text-center text-xs font-mono text-[var(--text-muted)]">
                No public non-forked repositories found.
              </div>
            ) : (
              topRepos.map((repo) => (
                <GlassCard key={repo.id} hoverTilt className="flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-sm font-bold text-[var(--text-primary)] group-hover:text-[#de6430] transition-colors">
                        <FolderGit2 className="w-4 h-4 text-[#de6430]" />
                        <span className="truncate max-w-[220px]">{repo.name}</span>
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-stone-100 dark:bg-zinc-800 border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[#de6430] hover:text-white dark:hover:bg-[#de6430] transition-all shadow-2xs shrink-0"
                        title="View on GitHub"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans font-normal line-clamp-2">
                      {repo.description || 'Public GitHub repository codebase.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] font-mono text-xs mt-4">
                    <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language] || languageColors.Other }}
                      />
                      <span>{repo.language || 'Other'}</span>
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
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
