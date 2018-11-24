(function(window, undefined) {
  var dictionary = {
    "5b251fae-9285-4d73-af41-2e0cf3f02ef3": "AddToFavouritesDevice",
    "b7b0c6e3-4a00-47e3-87d8-f852e22bc9e4": "DevicesByCategory",
    "2c397630-433d-412f-a053-cec905ca780b": "MicrowaveFunctions",
    "0598fa30-8287-4d19-aa25-371abe86a25c": "view Device",
    "653463f7-6f2a-4fe7-8b9c-b1acae27126a": "SelectRoomType",
    "daa9e52b-b7ea-4484-85d3-4da10b4bd8ae": "GarageDoorFunctions",
    "5586b14e-7dd6-4ab4-8c16-fe061d7b7324": "FridgeFunctions",
    "97132095-5005-4e5c-9ccf-bb4f038b3dea": "MyRooms",
    "0b139b7a-334c-4ee5-94f3-73eaa227da56": "LockDoorFunctions",
    "0dc8c279-078c-4556-8672-fbb449c1d738": "SelectExistingRoom",
    "78513395-3b95-4ef2-a2fb-952cba5bb037": "WindowFunctions",
    "0310b621-f1f7-4397-af3b-eb8a86c8b329": "viewlist Device",
    "60aa9654-b46a-4d4d-8644-59cb726b899a": "PCFunctions",
    "c09cafcc-4bb8-41b9-9255-f5f15adc5210": "PlugFunctions",
    "b55b4440-c16b-4eaf-9565-6c99f4d3c423": "SelectDeviceTypeRoom",
    "81b32b1a-689d-4ef6-846d-a8b9d67e35d8": "HeaterFunctions",
    "30a82784-702a-4c54-b023-353a4be55518": "LightFunctions",
    "a148e6f5-fa45-4175-bb17-55861f58aa3c": "CCTVFunctions",
    "ed3fa636-1eab-42ee-9ccb-f800b17331a4": "SelectDeviceType",
    "0521154e-a523-42d6-adca-7a5afe198033": "viewlist Device_1",
    "24a138c8-eed7-457e-ac54-3af4706cf9c1": "Room",
    "c197656f-a2f9-4e91-8c69-83403df9165f": "viewlist Room",
    "da520b3b-d824-43a1-823f-703ccc638a5b": "AddToFavoritesCategories",
    "02ba219b-fb2e-4f07-8009-6141269d040a": "DevicesOn",
    "07544f36-c9d8-4e04-ba7e-86667107a097": "MyFavourites",
    "3a1f2409-a066-4a23-bd3c-46d68d1af054": "OvenFunctions",
    "fa687ca9-7f6e-47fc-8c0e-8a37aaff29ab": "MyCategories",
    "c1f7a4ba-dc45-48a3-aa9d-6a3ccf399e21": "Template 1",
    "3c1f51d9-c3a1-4c3e-8ddf-229e5ba457e0": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);