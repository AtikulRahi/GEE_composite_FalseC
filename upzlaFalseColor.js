//print(roi.aggregate_array("NAME_3"))
var upzla = roi.filter(ee.Filter.eq("NAME_3", "Maulvibazar S."))
Map.centerObject(upzla,10)
Map.addLayer(upzla,{},"Maulvibazar S.")

var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED") 
          .filterBounds(upzla)
          .filterDate("2023-01-01","2023-01-31")
          .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",10))
          .select(["B4","B3","B2","B8"])
          .median()
print(s2)

var vizPerams = {
  min:0,
  max:2000,
  bands:["B8","B4","B3"]
}
Map.addLayer(s2.clip(upzla),vizPerams,"False image of Moulvibazar Sadar")