export interface EventRecord {
  eventCode: string
  eventName: string
  folder: string
}

// Replace with a real database later.
// Keyed by lowercased eventCode for case-insensitive lookup.
const eventCodeToEvent: Record<string, EventRecord> = {
  wedding2025: {
    eventCode: "WEDDING2025",
    eventName: "John & Sara Wedding",
    folder: "events/WEDDING2025",
  },
}

export function getEventByCode(eventCode: string): EventRecord | null {
  if (!eventCode) return null
  const normalized = eventCode.trim().toLowerCase()
  return eventCodeToEvent[normalized] ?? null
}

export function upsertEvent(event: EventRecord): void {
  const key = event.eventCode.trim().toLowerCase()
  eventCodeToEvent[key] = event
}



