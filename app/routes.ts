import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("gallery", "routes/gallery.tsx"),
  route("programming", "routes/programming.tsx"),
  route("registration", "routes/registration.tsx"),
  route("cad", "routes/cad.tsx"),
  route("electrical", "routes/electrical.tsx"),
  route("mechanical", "routes/mechanical.tsx"),
  route("business", "routes/business.tsx"),
  route("executive", "routes/executive.tsx"),
  route("donors", "routes/donors.tsx"),
  route("field-building", "routes/fieldBuilding.tsx"),
] satisfies RouteConfig;
