import pluralize from '../helpers/pluralize';

let words = [
  'after',
  'afternoon',
  'afterwards',
  'alarm clock',
  'AM',
  'analog clock',
  'annual',
  'ante meridian',
  'anytime',
  'bedtime',
  'before',
  'before hand',
  'belated',
  'bell',
  'biennial',
  'bicentennial',
  'calendar',
  'calendar year',
  'century',
  'chronological',
  'chronology',
  'chronometer',
  'clock',
  'clock face',
  'Coordinated Universal Time',
  'cuckoo clock',
  'day',
  'daylight',
  'daylight savings time',
  'daytime',
  'days of the week',
  'decade',
  'decennium',
  'delay',
  'delayed',
  'dial',
  'digital clock',
  'DST',
  'early',
  'eon',
  'epoch',
  'era',
  'evening',
  'everyday',
  'face (of a clock)',
  'fiscal year',
  'fortnight',
  'future',
  'galactic year',
  'geologic time',
  'gnomon',
  'grandfather clock',
  'Greenwich Mean Time',
  'half life',
  'hands',
  'high noon',
  'horology',
  'hour',
  'hourglass',
  'hour hand',
  'IDL',
  'International Date Line',
  'jiffy',
  'jubilee',
  'late',
  'later',
  'leap second',
  'leap year',
  'lunar month',
  'meridian',
  'microsecond',
  'midafternoon',
  'midnight',
  'midmorning',
  'millennium',
  'millisecond',
  'minute',
  'minute hand',
  'moment',
  'momentarily',
  'month',
  'morning',
  'nanosecond',
  'night',
  'nighttime',
  'noon',
  'now',
  'o\'clock',
  'on time',
  'overtime',
  'past',
  'pendulum clock',
  'per annum',
  'per diem',
  'period',
  'picosecond',
  'PM',
  'pocket watch',
  'post meridian',
  'premature',
  'present',
  'prime meridian',
  'punctual',
  'quarter hour',
  'quartz clock',
  'quaver',
  'schedule',
  'season',
  'second',
  'second hand',
  'semester',
  'semiquaver',
  'shift',
  'sidereal time',
  'someday',
  'sometime',
  'soon',
  'stopwatch',
  'sundial',
  'sunrise',
  'sunset',
  'synchronized',
  'tardy',
  'tempo',
  'then',
  'time',
  'timekeeper',
  'timepiece',
  'timer',
  'timetable',
  'time zone',
  'tonight',
  'today',
  'tomorrow',
  'triennium',
  'trimester',
  'twilight',
  'UTC',
  'watch',
  'water clock',
  'week',
  'wristwatch',
  'year',
  'yesterday',
  'yesteryear',
  'zone',
  'Zulu time'
];

export default (data) => {
  return pluralize(words);
}
