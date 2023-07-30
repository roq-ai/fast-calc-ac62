const mapping: Record<string, string> = {
  calculators: 'calculator',
  files: 'file',
  lockers: 'locker',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
