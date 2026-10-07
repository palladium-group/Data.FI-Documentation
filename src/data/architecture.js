// Content for the interactive architecture diagram on /docs/architecture/.
// Edit this file to change what the diagram shows. The drawing code in
// src/components/ArchitectureDiagram only reads it.

const COMPONENTS = '/docs/architecture/components';
const integ = (slug, label) => ({label, to: `/docs/integrations/${slug}/`});

export const streams = [
  {id: 'identity', label: 'Identity', phase: 'P1'},
  {id: 'clinical', label: 'Clinical', phase: 'P2'},
  {id: 'logistics', label: 'Logistics', phase: 'P3'},
  {id: 'surveillance', label: 'Surveillance', phase: 'P4'},
  {id: 'analytics', label: 'Analytics', phase: 'P5'},
];

export const nodes = [
  // ------------------------------------------------------------ Core platform
  {
    id: 'apps',
    lane: 'core',
    label: 'Android health worker apps',
    sub: 'CHW and supervisor apps',
    page: `${COMPONENTS}/echis-app/`,
    summary:
      'Offline-first apps used by community health workers and supervisors. Each form is a FHIR Questionnaire; template extraction turns the answers into structured FHIR records and, where needed, the next Task.',
    points: [
      'All traffic goes through the Keycloak-protected FHIR Info Gateway.',
      'Enterprise patient IDs, counter-referrals and stock balances arrive on the next sync.',
    ],
    standards: ['HL7 FHIR R4 (Questionnaire, Task, Patient, Encounter)', 'OAuth 2.0 tokens from Keycloak'],
  },
  {
    id: 'web-admin',
    lane: 'core',
    label: 'Web administration portal',
    sub: 'Users, teams and locations',
    page: `${COMPONENTS}/web-admin/`,
    summary:
      'Browser portal for administrators to manage users, care teams, locations and organizations, stored as FHIR resources.',
    points: ['Signs in through Keycloak with OAuth 2.0 / OpenID Connect.'],
    standards: ['OAuth 2.0 / OpenID Connect', 'HL7 FHIR R4 (Practitioner, Organization, Location, CareTeam)'],
  },
  {
    id: 'gateway',
    lane: 'core',
    label: 'Keycloak SSO · FHIR Info Gateway',
    sub: 'Authentication and access control',
    page: `${COMPONENTS}/keycloak/`,
    summary:
      'Single entry point to the FHIR server. Keycloak issues tokens for apps and the portal, and the gateway enforces role-based access rules before any request reaches the shared record.',
    points: ['Apps and the portal never call the FHIR server directly.'],
    standards: ['OAuth 2.0', 'OpenID Connect', 'Role-based access rules'],
  },
  {
    id: 'fhir',
    lane: 'core',
    kind: 'hub',
    label: 'HL7 FHIR server',
    sub: 'HAPI FHIR · central router',
    page: `${COMPONENTS}/hapi-fhir/`,
    summary:
      'The shared community record and the central router of the architecture. Every integration starts from or ends at this server. OpenFn workflows read new and changed records from it and write identifiers, tasks and outcomes back.',
    points: [
      'Keycloak, HAPI FHIR and Data.FI OpenSRP form the foundational core that is already deployed.',
      'A development instance runs with synthetic FHIR resources.',
    ],
    standards: ['HL7 FHIR R4', 'eCHIS FHIR Implementation Guide profiles'],
  },

  // -------------------------------------------------------- Integration layer
  {
    id: 'openfn',
    lane: 'layer',
    label: 'OpenFn integration layer',
    sub: 'Workflows WF1 to WF8 · mapping · write-back',
    page: `${COMPONENTS}/openfn/`,
    summary:
      'Middleware between the FHIR server and every integrated system. Eight OpenFn workflows poll for new and changed records, query or update the target system, map payloads, and write identifiers and statuses back to FHIR.',
    points: [
      'Identity, clinical and surveillance/logistics work can run as three independent streams in parallel.',
      'Field-level mappings for every workflow are kept in the eCHIS Mapping Specification.',
    ],
    standards: ['HL7 FHIR R4', 'Target system APIs (SanteMPI, OpenMRS, OpenLMIS, DHIS2, RapidPro)'],
  },

  // ------------------------------------------------------- Integrated systems
  {
    id: 'santempi',
    lane: 'integrated',
    stream: 'identity',
    label: 'SanteMPI',
    sub: 'Enterprise master patient index',
    page: `${COMPONENTS}/santempi/`,
    summary:
      'Probabilistic matching on first name, surname, date of birth, gender and phone number. Returns the existing enterprise patient ID (eMPI) on a match, or creates a new one.',
    points: ['There is no direct call from the eCHIS app to SanteMPI. Everything goes through the FHIR server and OpenFn.'],
    standards: ['HL7 FHIR R4 Patient', 'Patient.identifier (eMPI)'],
  },
  {
    id: 'openmrs',
    lane: 'integrated',
    stream: 'clinical',
    label: 'OpenMRS backend',
    sub: 'Facility EMR',
    page: `${COMPONENTS}/openmrs/`,
    summary:
      'Receives community referrals as a patient, an encounter carrying the referral reason and community health history, and a referral order. When the order is completed, OpenFn writes the outcome back to the shared record.',
    points: [
      'Patients are found and created by their eMPI only, so identity reconciliation must run first.',
      'Written through the OpenMRS native REST API, because its FHIR API exposes ServiceRequest read-only.',
    ],
    standards: ['OpenMRS REST API', 'CIEL concepts for referral type and reason'],
  },
  {
    id: 'o3',
    lane: 'integrated',
    stream: 'clinical',
    label: 'OpenMRS O3 frontend',
    sub: 'Clinician interface',
    page: `${COMPONENTS}/openmrs/`,
    summary:
      'Where the clinical officer handles the referred patient. It shows the shared health record history from the FHIR server to inform treatment, and the clinician signs off the visit here.',
    points: [],
    standards: ['HL7 FHIR R4'],
  },
  {
    id: 'openlmis',
    lane: 'integrated',
    stream: 'logistics',
    label: 'OpenLMIS',
    sub: 'Stock and supply chain',
    page: `${COMPONENTS}/openlmis/`,
    summary:
      'Issues commodities such as malaria kits, ORS and family planning supplies to CHW facilities, and records each CHW’s confirmed receipts and adjustments as stock events.',
    points: ['Products are linked to eCHIS commodities by an eCHIS commodity id on each OpenLMIS product.'],
    standards: ['OpenLMIS stock events API', 'HL7 FHIR R4 (commodity Group, Observation, Task)'],
  },
  {
    id: 'dhis2-tracker',
    lane: 'integrated',
    stream: 'surveillance',
    label: 'DHIS2 Tracker',
    sub: 'AEFI · CEBS signals',
    page: `${COMPONENTS}/dhis2/`,
    summary:
      'National surveillance instance. Adverse events following immunization are enrolled in the AEFI Reporting program, and supervisor-verified community signals in CEBS Signal Surveillance.',
    points: [],
    standards: ['DHIS2 Tracker API', 'HL7 FHIR R4 (AdverseEvent, Observation, Task)'],
  },
  {
    id: 'dhis2-aggregate',
    lane: 'integrated',
    stream: 'surveillance',
    label: 'DHIS2 Aggregate',
    sub: 'Monthly indicators',
    page: `${COMPONENTS}/dhis2/`,
    summary:
      'Receives anonymised indicator totals, such as the number of HIV tests conducted by CHWs, at the close of each reporting period.',
    points: [],
    standards: ['DHIS2 data value sets'],
  },
  {
    id: 'rapidpro',
    lane: 'integrated',
    stream: 'surveillance',
    label: 'RapidPro',
    sub: 'SMS and email alerts',
    page: `${COMPONENTS}/rapidpro/`,
    summary:
      'Sends automated SMS alerts for severe adverse events and confirmed community threats. OpenFn starts the flow as part of the surveillance workflow.',
    points: [],
    standards: ['RapidPro flows API'],
  },
  {
    id: 'elt',
    lane: 'integrated',
    stream: 'analytics',
    label: 'OpenFn ingestion',
    sub: 'ELT and translation',
    page: `${COMPONENTS}/openfn/`,
    summary:
      'Reads new and changed Patient, Encounter and Observation resources from the FHIR server and upserts them into the warehouse raw schema.',
    points: [],
    standards: ['HL7 FHIR R4 (source)', 'SQL (target)'],
  },
  {
    id: 'warehouse',
    lane: 'integrated',
    stream: 'analytics',
    label: 'PostgreSQL warehouse',
    sub: 'Raw · staging · analytics',
    page: `${COMPONENTS}/analytics-warehouse/`,
    summary:
      'Isolated analytics database. Records land in a raw schema, are cleaned in staging, and are flattened into analytics tables for dashboards and reporting.',
    points: [],
    standards: ['PostgreSQL'],
  },
  {
    id: 'superset',
    lane: 'integrated',
    stream: 'analytics',
    label: 'Apache Superset',
    sub: 'BI dashboards',
    page: `${COMPONENTS}/superset/`,
    summary: 'Clinical and program dashboards over the flattened analytics tables.',
    points: ['User access follows the roles already defined in the identity provider.'],
    standards: ['SQL', 'Keycloak roles'],
  },
];

// `source` -> `target` is the direction data moves. `mode` is Push, Pull or
// Bidirectional. `via: 'openfn'` marks exchanges carried by the integration layer,
// and `workflow` names the OpenFn workflow in the eCHIS Mapping Specification.
export const flows = [
  {
    source: 'apps',
    target: 'gateway',
    mode: 'bi',
    label: 'Sync FHIR resources',
    detail: 'Apps authenticate with Keycloak and sync their FHIR resources through the gateway.',
  },
  {
    source: 'web-admin',
    target: 'gateway',
    mode: 'bi',
    label: 'OAuth 2.0 / OIDC',
    detail: 'Administrators sign in and manage users, care teams, locations and organizations.',
  },
  {
    source: 'gateway',
    target: 'fhir',
    mode: 'bi',
    label: 'Authorised reads and writes',
    detail: 'Only requests that pass the gateway access rules reach the FHIR server.',
  },
  {
    source: 'fhir',
    target: 'santempi',
    mode: 'bi',
    via: 'openfn',
    workflow: 'WF1',
    label: 'Identity reconciliation',
    detail:
      'Every synced Patient is matched in SanteMPI on its demographics and registered if there is no match. OpenFn then writes the eMPI back onto the Patient, and the apps pick it up on their next sync.',
    integrations: [integ('identity-reconciliation', 'Identity reconciliation')],
  },
  {
    source: 'fhir',
    target: 'openmrs',
    mode: 'push',
    via: 'openfn',
    workflow: 'WF2',
    label: 'Community referral',
    detail:
      'OpenFn picks up active referral ServiceRequests, finds or creates the patient in OpenMRS by eMPI, and creates an encounter with the referral reason and health history, plus a referral order.',
    integrations: [integ('community-referral', 'Community referral')],
  },
  {
    source: 'openmrs',
    target: 'fhir',
    mode: 'push',
    via: 'openfn',
    workflow: 'WF3',
    label: 'Counter-referral',
    detail:
      'When the referral order is completed, OpenFn writes a ClinicalImpression with the clinician’s note to the shared record, then marks the ServiceRequest completed for the CHW.',
    integrations: [integ('counter-referral', 'Counter-referral')],
  },
  {
    source: 'o3',
    target: 'openmrs',
    mode: 'bi',
    label: 'Clinical workflow',
    detail: 'Clinicians work the referred patient in O3 and sign off the visit in OpenMRS.',
  },
  {
    source: 'fhir',
    target: 'o3',
    mode: 'pull',
    label: 'Shared health record',
    detail: 'O3 pulls the patient’s history from the FHIR server to inform treatment.',
  },
  {
    source: 'openlmis',
    target: 'fhir',
    mode: 'push',
    via: 'openfn',
    workflow: 'WF4',
    label: 'Stock issue',
    detail:
      'For each stock issue, OpenFn creates an incoming-stock Observation and a confirm-receipt Task in the shared record, which syncs to the CHW’s worklist.',
    integrations: [integ('supply-issue-receipt', 'Supply issue and receipt')],
  },
  {
    source: 'fhir',
    target: 'openlmis',
    mode: 'push',
    via: 'openfn',
    workflow: 'WF5',
    label: 'Receipt and adjustments',
    detail:
      'OpenFn reads the CHW’s restock encounters and posts two stock events to OpenLMIS: the receipt first, then damage and expiry adjustments.',
    integrations: [integ('supply-issue-receipt', 'Supply issue and receipt')],
  },
  {
    source: 'fhir',
    target: 'dhis2-tracker',
    mode: 'push',
    via: 'openfn',
    workflow: 'WF6',
    label: 'Surveillance cases',
    detail:
      'Adverse events following immunization and supervisor-verified CEBS signals are posted to DHIS2 Tracker as tracked entities, enrollments and events.',
    integrations: [integ('surveillance-alerts', 'Surveillance and alerts')],
  },
  {
    source: 'fhir',
    target: 'rapidpro',
    mode: 'push',
    via: 'openfn',
    workflow: 'WF6',
    label: 'Alert messaging',
    detail:
      'For severe AEFI and confirmed CEBS threats, OpenFn starts a RapidPro flow that sends an SMS alert.',
    integrations: [integ('surveillance-alerts', 'Surveillance and alerts')],
  },
  {
    source: 'warehouse',
    target: 'dhis2-aggregate',
    mode: 'push',
    via: 'openfn',
    workflow: 'WF7',
    label: 'Monthly indicators',
    detail:
      'The warehouse builds one payload per period and community health unit. OpenFn posts it to the eCHIS Monthly Report data set, leaving out zero values.',
    integrations: [integ('routine-reporting', 'Routine reporting')],
  },
  {
    source: 'fhir',
    target: 'elt',
    mode: 'pull',
    via: 'openfn',
    workflow: 'WF8',
    label: 'Warehouse ingest',
    detail: 'New and changed Patient, Encounter and Observation resources are read since the last run.',
    integrations: [integ('analytics-ingestion', 'Analytics ingestion')],
  },
  {
    source: 'elt',
    target: 'warehouse',
    mode: 'push',
    label: 'Load and transform',
    detail: 'Records are loaded into the raw schema and transformed through staging into analytics tables.',
    integrations: [integ('analytics-ingestion', 'Analytics ingestion')],
  },
  {
    source: 'warehouse',
    target: 'superset',
    mode: 'pull',
    label: 'Dashboards',
    detail: 'Superset queries the flattened analytics tables.',
  },
];

export const security = {
  label: 'Security and access',
  chips: ['Keycloak SSO', 'OAuth 2.0 / OpenID Connect', 'Gateway access rules', 'Role-based dashboards'],
  note: 'Applies to every request into the shared record',
  node: 'gateway',
};
