export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Stats: { stats: any }; //TODO: compléter
};

export type TabStackParamList = {
  Profile: undefined;
  Practice: undefined;
  Stats: undefined;
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
  UnderhandLayup: undefined;
  Eurostep: undefined;
  UpAndUnder: undefined;
  ReverseLayup: undefined;
  SpinLayup: undefined;
  ShakeAndBake: undefined;
  Floater: undefined;
  Post: undefined;
  ForwardPivot: undefined;
  BackPivot: undefined;
  JumpHook: undefined;
  SkyHook: undefined;
  DropStep: undefined;
  StepThrough: undefined;
  DreamShake: undefined;
  ReverseSpin: undefined;
  FakeReverse: undefined;
  PennyHardaway: undefined;
  KyrieHesi: undefined;
  BallControl: undefined;
  Crossover: undefined;
  BasicCrossover: undefined;
  KillerCrossover: undefined;
  DoubleCrossover: undefined;
  Snatch: undefined;
  BTL: undefined;
  BTB: undefined;
  InNOut: undefined;
  Hesitation: undefined;
  Shammgod: undefined;
  SpinMoves: undefined;
  Plyometrics: undefined;
  Core: undefined;
  Leg: undefined;
  Cardio: undefined;
};

export type UserStackParamList = {
  Login: undefined;
  Overview: undefined;
};
