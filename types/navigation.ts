import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Screens } from "../constants/screens";

// export type RootStackParamList = {
//   Onboarding: undefined;
//   SignUp: undefined;
//   Explore: undefined;
//   Basket: undefined;
//   DeliveryAddress: undefined;
//   CardDetails: undefined;
//   Congratulations: undefined;
//   // PlaceDetail: { placeId: string };
//   // Map: { location: { lat: number; lng: number } };
// };

export type ScreenParamType = Record<string, any> | undefined;
export type RootStackParamList = Record<keyof typeof Screens, ScreenParamType>;

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
