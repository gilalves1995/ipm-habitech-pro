jQuery("#simulation")
  .on("click", ".s-0521154e-a523-42d6-adca-7a5afe198033 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Device" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "Device"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Device" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "Device",
                        "element": "#s-Device",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimAnd",
                                "parameter": [ {
                                  "action": "jimAnd",
                                  "parameter": [ {
                                    "action": "jimContains",
                                    "parameter": [ {
                                      "field": "ID"
                                    },{
                                      "datatype": "property",
                                      "target": "#s-Input_5",
                                      "property": "jimGetValue"
                                    } ]
                                  },{
                                    "action": "jimContains",
                                    "parameter": [ {
                                      "field": "Name"
                                    },{
                                      "datatype": "property",
                                      "target": "#s-Input_6",
                                      "property": "jimGetValue"
                                    } ]
                                  } ]
                                },{
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "DeviceTypeID"
                                  },null ]
                                } ]
                              },{
                                "action": "jimContains",
                                "parameter": [ {
                                  "field": "RoomAssociatedID"
                                },null ]
                              } ]
                            },{
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "isFavorite"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_7",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "isActive"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_8",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0598fa30-8287-4d19-aa25-371abe86a25c",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-Device" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-Device" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-Device" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-Device" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  });