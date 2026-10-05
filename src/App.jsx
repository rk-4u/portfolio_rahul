import React from "react";
import { useEffect, useState, lazy, Suspense } from 'react';
import { profile, nav, skills, projects, jobs, schools, socials } from './data/data';
import { Analytics } from '@vercel/analytics/react';

const Wave = lazy(() => import('./components/background/WaveBackground'));
const Ext = ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="link">{children}</a>;

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const s = () => setSolid(scrollY > 20);
    s(); addEventListener('scroll', s, { passive: true });
    return () => removeEventListener('scroll', s);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  return (
    <>
      <header className={`hdr${solid ? ' solid' : ''}`}>
        <a href="#top" className="logo" aria-label="Random, home">Random<b>. !</b></a>
        <nav className="nav" aria-label="Main">{nav.map(([n, id]) => <a key={id} href={`#${id}`}>{n}</a>)}</nav>
        <button className="menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </header>
      {open && <nav className="drawer" style={{ zIndex: 35 }}>{nav.map(([n, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{n}</a>)}</nav>}
    </>
  );
}

export default function App() {
  const send = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Message from ' + f.get('name'))}&body=${encodeURIComponent(f.get('message') + '\n\nReply to: ' + f.get('email'))}`;
  };
  return (
    <>
      <Suspense fallback={null}><Wave /></Suspense>
      <Header />
      <main>
        <section id="top" className="hero">
          <h1 className="rise">Rahul<br />Choudhary</h1>
          <p className="role rise" style={{ animationDelay: '.15s' }}>{profile.role}</p>
          <div className="hbot rise" style={{ animationDelay: '.3s' }}>
            <p>{profile.summary}</p>
            <div className="btns">
              <a className="btn solid" href={`mailto:${profile.email}`}>Hire me</a>
              <a className="btn" href={profile.resume} download>Download resume</a>
            </div>
          </div>
        </section>

        <section id="about" className="sec split">
          <h2 className="t" style={{ marginBottom: 0 }}>About</h2>
          <div>
            <p className="lead">{profile.statement}</p>
            <p className="mute" style={{ marginTop: 28, maxWidth: '36rem' }}>{profile.foundation}</p>
            <dl className="facts">
              <div><dt>Based in</dt><dd className="mute">{profile.location}</dd></div>
              <div><dt>Studying</dt><dd className="mute">MCA, 2025 to 2027</dd></div>
              <div><dt>Portfolio</dt><dd className="mute">{profile.site}</dd></div>
            </dl>
          </div>
        </section>

        <section id="skills" className="sec">
          <h2 className="t">Skills</h2>
          {skills.map((s) => (
            <div className="row" key={s.label}>
              <h3 className="acc" style={{ fontSize: '1.1rem' }}>{s.label}</h3>
              <ul className="chips">{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </section>

        <section id="work" className="sec">
          <h2 className="t">Selected work</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <article key={p.title} className={`p${i < 2 ? ' big' : ''}${i % 2 ? ' off' : ''}`}>
                <div className="cover"><span>{p.title}</span></div>
                <h3>{p.title}</h3>
                <p className="stack">{p.stack}</p>
                <p className="mute">{p.desc}</p>
                {(p.live || p.code) && (
                  <p className="links">{p.live && <Ext href={p.live}>View live</Ext>}{p.code && <Ext href={p.code}>Source code</Ext>}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="sec">
          <h2 className="t">Experience</h2>
          {jobs.map((j) => (
            <article className="row job" key={j.role + j.org}>
              <p className="acc">{j.when}</p>
              <div><h3>{j.role}, {j.org}</h3><ul>{j.pts.map((t) => <li key={t}>{t}</li>)}</ul></div>
            </article>
          ))}
          <h2 className="t" style={{ marginTop: 96, fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: 24 }}>Education</h2>
          {schools.map((s) => (
            <div className="row" key={s.name}><p className="acc">{s.when}</p><p style={{ fontSize: '1.3rem' }}>{s.name}, <span className="mute">{s.where}</span></p></div>
          ))}
        </section>

        <section id="contact" className="sec">
          <h2 className="big-t">Let's talk</h2>
          <div className="cgrid">
            <address>
              <p>{profile.location}</p>
              <a className="link" href="tel:+917869867379">{profile.phone}</a>
              <a className="link" href={`mailto:${profile.email}`} style={{ wordBreak: 'break-all' }}>{profile.email}</a>
              <div className="socials">{socials.map(([n, u]) => <Ext key={n} href={u}>{n}</Ext>)}</div>
            </address>
            <form onSubmit={send}>
              <label><span style={{ position: 'absolute', left: -9999 }}>Name</span><input name="name" required placeholder="Your name" /></label>
              <label><span style={{ position: 'absolute', left: -9999 }}>Email</span><input name="email" type="email" required placeholder="Your email" /></label>
              <label><span style={{ position: 'absolute', left: -9999 }}>Message</span><textarea name="message" required rows="4" placeholder="Your message" /></label>
              <button className="btn solid">Send message</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="ftr"><span>© {new Date().getFullYear()} Rahul Choudhary</span><a href="#top" className="link">Back to top</a></footer>
      <Analytics />
    </>
  );
}
