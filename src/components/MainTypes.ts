export interface ActivityMeta {
  label: string;
  fillColor: string;
}

export interface Activity {
  name: string;
  value: string;
}

export interface DayWiseActivity {
  date: string;
  items: {
    children: {
      count: string;
      label: string;
      fillColor: string;
    }[];
  };
}

export interface Row {
  name: string;
  totalActivity: Activity[];
  dayWiseActivity: DayWiseActivity[];
}

export interface AuthorWorklog {
  activityMeta: ActivityMeta[];
  rows: Row[];
}

export interface ApiResponse {
  data: {
    AuthorWorklog: AuthorWorklog;
  };
}
