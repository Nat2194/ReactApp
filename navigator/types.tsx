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
  FormShot: undefined;
  FreeThrow: undefined;
  Midrange: undefined;
  RayAllen: undefined;
  ThreePoint: undefined;
  Fadeaway: undefined;
  Stepback: undefined;
  Mikan: undefined;
  Layup: undefined;
  Floater: undefined;
  Post: undefined;
  BallControl: undefined;
  Crossover: undefined;
  BTL: undefined;
  BTB: undefined;
  InNOut: undefined;
  SpinMoves: undefined;
  Plyo: undefined;
  Core: undefined;
  Leg: undefined;
  Cardio: undefined;
};

export type UserStackParamList = {
  Login: undefined;
  Overview: undefined;
};
