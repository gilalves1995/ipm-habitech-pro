jQuery("#simulation")
  .on("click", ".s-c197656f-a2f9-4e91-8c69-83403df9165f .click", function(event, data) {
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
                    "target": [ "#s-Room" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "Room"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Room" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "Room",
                        "element": "#s-Room",
                        "value": {
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
                                  "target": "#s-Input_3",
                                  "property": "jimGetValue"
                                } ]
                              },{
                                "action": "jimContains",
                                "parameter": [ {
                                  "field": "Name"
                                },{
                                  "datatype": "property",
                                  "target": "#s-Input_4",
                                  "property": "jimGetValue"
                                } ]
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "RoomTypeID"
                              },null ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "DevicesNumber"
                            },null ]
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
    } else if(jFirer.is("#s-Text_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-Room" ]
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
    } else if(jFirer.is("#s-Text_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-Room" ]
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
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-Room" ]
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
    } else if(jFirer.is("#s-Text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-Room" ]
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
  });