import {useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {flows, nodes, security, streams} from '@site/src/data/architecture';
import styles from './styles.module.css';

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

const MODES = {
  push: {label: 'Push', arrow: '→'},
  pull: {label: 'Pull', arrow: '→'},
  bi: {label: 'Bidirectional', arrow: '⇄'},
};

function flowsFor(id) {
  if (id === 'openfn') return flows.filter((f) => f.via === 'openfn');
  return flows.filter((f) => f.source === id || f.target === id);
}

function relatedTo(id) {
  const ids = new Set([id]);
  for (const f of flowsFor(id)) {
    ids.add(f.source);
    ids.add(f.target);
    if (f.via) ids.add(f.via);
  }
  return ids;
}

function Node({id, active, related, onOpen, onHover}) {
  const node = byId[id];
  return (
    <button
      type="button"
      className={clsx(
        styles.node,
        node.kind === 'hub' && styles.hub,
        active && !related.has(id) && styles.dimmed,
        active === id && styles.current,
      )}
      onClick={() => onOpen(id)}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(id)}
      onBlur={() => onHover(null)}>
      <span className={styles.nodeLabel}>{node.label}</span>
      <span className={styles.nodeSub}>{node.sub}</span>
    </button>
  );
}

function Connector({label}) {
  return (
    <div className={styles.connector} aria-hidden="true">
      <svg viewBox="0 0 48 16" width="48" height="16">
        <path d="M6 8 H42 M10 4 L5 8 L10 12 M38 4 L43 8 L38 12" />
      </svg>
      {label && <span>{label}</span>}
    </div>
  );
}

function Drawer({id, onOpen, onClose}) {
  const node = byId[id];
  const [tab, setTab] = useState('overview');
  const nodeFlows = flowsFor(id);
  const stream = streams.find((s) => s.id === node.stream);

  useEffect(() => setTab('overview'), [id]);

  const tabs = [
    ['overview', 'Overview'],
    ['flows', `Data flows (${nodeFlows.length})`],
    ['standards', 'Standards'],
  ];

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label={node.label}>
        <header className={styles.drawerTop}>
          <div>
            <p className={styles.kicker}>
              {node.lane === 'core' && 'Core platform'}
              {node.lane === 'layer' && 'Integration layer'}
              {stream && `${stream.label} stream · ${stream.phase}`}
            </p>
            <h2 className={styles.drawerTitle}>{node.label}</h2>
            <p className={styles.drawerSub}>{node.sub}</p>
          </div>
          <button type="button" className={styles.close} onClick={onClose} autoFocus>
            Close
          </button>
        </header>

        <nav className={styles.tabs}>
          {tabs.map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={clsx(styles.tab, tab === key && styles.tabActive)}
              onClick={() => setTab(key)}>
              {label}
            </button>
          ))}
        </nav>

        <div className={styles.drawerBody}>
          {tab === 'overview' && (
            <>
              <p>{node.summary}</p>
              {node.points.length > 0 && (
                <ul>
                  {node.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </>
          )}

          {tab === 'flows' &&
            nodeFlows.map((f) => (
              <div key={`${f.source}-${f.target}-${f.label}`} className={styles.flow}>
                <div className={styles.flowHead}>
                  <span className={clsx(styles.pill, styles[f.mode])}>{MODES[f.mode].label}</span>
                  {f.via && (
                    <span className={styles.via}>
                      {id !== f.via ? 'via OpenFn' : 'OpenFn'}
                      {f.workflow && ` ${f.workflow}`}
                    </span>
                  )}
                  <strong>{f.label}</strong>
                </div>
                <p className={styles.flowRoute}>
                  {[f.source, f.target].map((nid, i) => (
                    <span key={nid}>
                      {i === 1 && <span className={styles.arrow}> {MODES[f.mode].arrow} </span>}
                      {nid === id ? (
                        <b>{byId[nid].label}</b>
                      ) : (
                        <button type="button" className={styles.jump} onClick={() => onOpen(nid)}>
                          {byId[nid].label}
                        </button>
                      )}
                    </span>
                  ))}
                </p>
                <p>{f.detail}</p>
                {f.integrations?.map((link) => (
                  <Link key={link.to} to={link.to} className={styles.specLink}>
                    {link.label} spec →
                  </Link>
                ))}
              </div>
            ))}

          {tab === 'standards' && (
            <ul>
              {node.standards.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}
        </div>

        <footer className={styles.drawerFoot}>
          <Link to={node.page} className="button button--primary">
            Open component page →
          </Link>
        </footer>
      </aside>
    </>
  );
}

export default function ArchitectureDiagram() {
  const [open, setOpen] = useState(null);
  const [hover, setHover] = useState(null);
  const active = hover ?? open;
  const related = useMemo(() => (active ? relatedTo(active) : new Set()), [active]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const nodeProps = {active, related, onOpen: setOpen, onHover: setHover};

  return (
    <div className={styles.diagram}>
      <div className={styles.legend}>
        <span className={clsx(styles.pill, styles.push)}>Push</span>
        <span className={clsx(styles.pill, styles.pull)}>Pull</span>
        <span className={clsx(styles.pill, styles.bi)}>Bidirectional</span>
        <span className={styles.legendNote}>Hover to trace connections · click for details</span>
      </div>

      <button type="button" className={styles.band} onClick={() => setOpen(security.node)}>
        <span className={styles.bandBadge}>{security.label}</span>
        <span className={styles.chips}>
          {security.chips.map((c) => (
            <span key={c} className={styles.chip}>
              {c}
            </span>
          ))}
        </span>
        <span className={styles.bandNote}>{security.note}</span>
      </button>

      <section className={clsx(styles.lane, styles.coreLane)}>
        <h3 className={styles.laneTitle}>
          Core platform <span>Data.FI OpenSRP · Ona</span>
        </h3>
        <div className={styles.coreRow}>
          <div className={styles.stack}>
            <Node id="apps" {...nodeProps} />
            <Node id="web-admin" {...nodeProps} />
          </div>
          <Connector />
          <Node id="gateway" {...nodeProps} />
          <Connector />
          <Node id="fhir" {...nodeProps} />
        </div>
      </section>

      <button
        type="button"
        className={clsx(styles.layer, active && !related.has('openfn') && styles.dimmed)}
        onClick={() => setOpen('openfn')}
        onMouseEnter={() => setHover('openfn')}
        onMouseLeave={() => setHover(null)}
        onFocus={() => setHover('openfn')}
        onBlur={() => setHover(null)}>
        <span className={styles.layerArrows} aria-hidden="true">⇅</span>
        <span>
          <strong>{byId.openfn.label}</strong>
          <span className={styles.layerSub}>{byId.openfn.sub}</span>
        </span>
        <span className={styles.layerArrows} aria-hidden="true">⇅</span>
      </button>

      <section className={clsx(styles.lane, styles.integratedLane)}>
        <h3 className={styles.laneTitle}>
          Integrated systems
        </h3>
        <div className={styles.streams}>
          {streams.map((s) => (
            <div key={s.id} className={styles.stream} style={{'--accent': s.color}}>
              <div className={styles.streamHead}>
                <span className={styles.phase}>{s.phase}</span>
                {s.label}
              </div>
              {nodes
                .filter((n) => n.stream === s.id)
                .map((n) => (
                  <Node key={n.id} id={n.id} {...nodeProps} />
                ))}
            </div>
          ))}
        </div>
      </section>

      {open && <Drawer id={open} onOpen={setOpen} onClose={() => setOpen(null)} />}
    </div>
  );
}
