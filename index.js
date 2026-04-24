import * as DeckCore from "@deck.gl/core"
import * as DeckGeoLayers from "@deck.gl/geo-layers"
import * as DeckLayers from "@deck.gl/layers"
import * as DeckMapbox from "@deck.gl/mapbox"
import * as DeckMeshLayers from "@deck.gl/mesh-layers"
import * as LumaCore from "@luma.gl/core"
import * as DeckGlGeotiff from "@developmentseed/deck.gl-geotiff"
import * as Geotiff from "@developmentseed/geotiff"

// Assign to window so Rolldown cannot tree-shake these packages away despite
// their "sideEffects": false declarations.  The geo page's importmap-loaded
// controllers can consume these via window.GeoAssets once the bundle is loaded.
window.GeoAssets = {
  DeckCore,
  DeckGeoLayers,
  DeckLayers,
  DeckMapbox,
  DeckMeshLayers,
  LumaCore,
  DeckGlGeotiff,
  Geotiff
}
