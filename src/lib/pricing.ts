const dayPricing = { base: 5.15, perKm: 2.05, waitPerMin: 0.77 };
const nightPricing = { base: 5.35, perKm: 2.35, waitPerMin: 0.89 };

export function isNightTime(time: string): boolean {
  const hour = parseInt(time.split(":")[0], 10);
  return hour >= 23 || hour < 5;
}

export function calculateFare(km: number, night: boolean) {
  const p = night ? nightPricing : dayPricing;
  return {
    baseCost: p.base,
    distCost: parseFloat((km * p.perKm).toFixed(2)),
    total: parseFloat((p.base + km * p.perKm).toFixed(2)),
    night,
  };
}
