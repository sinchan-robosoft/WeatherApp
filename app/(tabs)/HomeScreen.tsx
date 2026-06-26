import AirQualityRail from "@/rails/AirQualityRail/AirQualityRail";
import EnhancedRadarRail from "@/rails/EnhancedRadarRail/EnhancedRadarRail";
import HeroRail from "@/rails/HeroRail/HeroRail";
import SavedClimateRail from "@/rails/SavedClimateRail/SavedClimateRail";
import TrackRail from "@/rails/TrackRail/TrackRail";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 flex-col">
      
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        className="flex-1 flex gap-3"
      >
        <HeroRail />
        <TrackRail />
        <AirQualityRail />
        <EnhancedRadarRail />
        <SavedClimateRail />
      </ScrollView>
    </View>
  );
}