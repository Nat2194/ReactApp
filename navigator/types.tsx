export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Stats: { stats: any }; //TODO: compléter
};

export type TabStackParamList = {
  Profile: undefined;
  Practice: undefined;
};

export type DrillStackParamList = {
  Overview: undefined;
  Shooting: undefined;
  Handling: undefined;
  Finishing: undefined;
  Athleticism: undefined;
};

export type UserStackParamList = {
  Login: undefined;
  Overview: undefined;
};
