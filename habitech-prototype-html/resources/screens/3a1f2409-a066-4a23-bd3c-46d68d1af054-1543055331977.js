jQuery("#simulation")
  .on("click", ".s-3a1f2409-a066-4a23-bd3c-46d68d1af054 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-minus-symbol")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-temperature-value",
                  "property": "jimGetValue"
                },"10" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-temperature-value" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-temperature-value" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-temperature-value",
                        "property": "jimGetValue"
                      },"20" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "fields": {
                      "deviceId": {
                        "field": "deviceId"
                      },
                      "intensity": {
                        "field": "intensity"
                      },
                      "color": {
                        "field": "color"
                      },
                      "windowControler": {
                        "field": "windowControler"
                      },
                      "timer": {
                        "field": "timer"
                      },
                      "temperature": {
                        "datatype": "property",
                        "target": "#s-temperature-value",
                        "property": "jimGetValue"
                      },
                      "modeOven": {
                        "field": "modeOven"
                      },
                      "modeWashingMachine": {
                        "field": "modeWashingMachine"
                      },
                      "modeDishwasher": {
                        "field": "modeDishwasher"
                      },
                      "alarmCode": {
                        "field": "alarmCode"
                      },
                      "modeAC": {
                        "field": "modeAC"
                      },
                      "modeMicrowave": {
                        "field": "modeMicrowave"
                      },
                      "volume": {
                        "field": "volume"
                      },
                      "centrifugation": {
                        "field": "centrifugation"
                      },
                      "turbo": {
                        "field": "turbo"
                      },
                      "modeSprinkler": {
                        "field": "modeSprinkler"
                      },
                      "modeSprinklerTimes": {
                        "field": "modeSprinklerTimes"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-temperature-value" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
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
    } else if(jFirer.is("#s-plus-symbol")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-temperature-value",
                  "property": "jimGetValue"
                },"250" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-temperature-value" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-temperature-value" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-temperature-value",
                        "property": "jimGetValue"
                      },"20" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "fields": {
                      "deviceId": {
                        "field": "deviceId"
                      },
                      "intensity": {
                        "field": "intensity"
                      },
                      "color": {
                        "field": "color"
                      },
                      "windowControler": {
                        "field": "windowControler"
                      },
                      "timer": {
                        "field": "timer"
                      },
                      "temperature": {
                        "datatype": "property",
                        "target": "#s-temperature-value",
                        "property": "jimGetValue"
                      },
                      "modeOven": {
                        "field": "modeOven"
                      },
                      "modeWashingMachine": {
                        "field": "modeWashingMachine"
                      },
                      "modeDishwasher": {
                        "field": "modeDishwasher"
                      },
                      "alarmCode": {
                        "field": "alarmCode"
                      },
                      "modeAC": {
                        "field": "modeAC"
                      },
                      "modeMicrowave": {
                        "field": "modeMicrowave"
                      },
                      "volume": {
                        "field": "volume"
                      },
                      "centrifugation": {
                        "field": "centrifugation"
                      },
                      "turbo": {
                        "field": "turbo"
                      },
                      "modeSprinkler": {
                        "field": "modeSprinkler"
                      },
                      "modeSprinklerTimes": {
                        "field": "modeSprinklerTimes"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-temperature-value" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
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
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "value": {
                      "field": "modeOven"
                    }
                  }
                },"Top" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-selected","#s-selected2","#s-selected1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-selected3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "fields": {
                      "deviceId": {
                        "field": "deviceId"
                      },
                      "intensity": {
                        "field": "intensity"
                      },
                      "color": {
                        "field": "color"
                      },
                      "windowControler": {
                        "field": "windowControler"
                      },
                      "timer": {
                        "field": "timer"
                      },
                      "temperature": {
                        "field": "temperature"
                      },
                      "modeOven": "Top",
                      "modeWashingMachine": {
                        "field": "modeWashingMachine"
                      },
                      "modeDishwasher": {
                        "field": "modeDishwasher"
                      },
                      "alarmCode": {
                        "field": "alarmCode"
                      },
                      "modeAC": {
                        "field": "modeAC"
                      },
                      "modeMicrowave": {
                        "field": "modeMicrowave"
                      },
                      "volume": {
                        "field": "volume"
                      },
                      "centrifugation": {
                        "field": "centrifugation"
                      },
                      "turbo": {
                        "field": "turbo"
                      },
                      "modeSprinkler": {
                        "field": "modeSprinkler"
                      },
                      "modeSprinklerTimes": {
                        "field": "modeSprinklerTimes"
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
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "value": {
                      "field": "modeOven"
                    }
                  }
                },"Bottom" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-selected","#s-success-message-text","#s-selected3","#s-selected1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-selected2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "fields": {
                      "deviceId": {
                        "field": "deviceId"
                      },
                      "intensity": {
                        "field": "intensity"
                      },
                      "color": {
                        "field": "color"
                      },
                      "windowControler": {
                        "field": "windowControler"
                      },
                      "timer": {
                        "field": "timer"
                      },
                      "temperature": {
                        "field": "temperature"
                      },
                      "modeOven": "Bottom",
                      "modeWashingMachine": {
                        "field": "modeWashingMachine"
                      },
                      "modeDishwasher": {
                        "field": "modeDishwasher"
                      },
                      "alarmCode": {
                        "field": "alarmCode"
                      },
                      "modeAC": {
                        "field": "modeAC"
                      },
                      "modeMicrowave": {
                        "field": "modeMicrowave"
                      },
                      "volume": {
                        "field": "volume"
                      },
                      "centrifugation": {
                        "field": "centrifugation"
                      },
                      "turbo": {
                        "field": "turbo"
                      },
                      "modeSprinkler": {
                        "field": "modeSprinkler"
                      },
                      "modeSprinklerTimes": {
                        "field": "modeSprinklerTimes"
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "value": {
                      "field": "modeOven"
                    }
                  }
                },"Top and Bottom" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-selected","#s-selected3","#s-selected2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-selected1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "fields": {
                      "deviceId": {
                        "field": "deviceId"
                      },
                      "intensity": {
                        "field": "intensity"
                      },
                      "color": {
                        "field": "color"
                      },
                      "windowControler": {
                        "field": "windowControler"
                      },
                      "timer": {
                        "field": "timer"
                      },
                      "temperature": {
                        "field": "temperature"
                      },
                      "modeOven": "Top and Bottom",
                      "modeWashingMachine": {
                        "field": "modeWashingMachine"
                      },
                      "modeDishwasher": {
                        "field": "modeDishwasher"
                      },
                      "alarmCode": {
                        "field": "alarmCode"
                      },
                      "modeAC": {
                        "field": "modeAC"
                      },
                      "modeMicrowave": {
                        "field": "modeMicrowave"
                      },
                      "volume": {
                        "field": "volume"
                      },
                      "centrifugation": {
                        "field": "centrifugation"
                      },
                      "turbo": {
                        "field": "turbo"
                      },
                      "modeSprinkler": {
                        "field": "modeSprinkler"
                      },
                      "modeSprinklerTimes": {
                        "field": "modeSprinklerTimes"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "value": {
                      "field": "modeOven"
                    }
                  }
                },"Grill" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-selected3","#s-selected2","#s-selected1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-selected" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "fields": {
                      "deviceId": {
                        "field": "deviceId"
                      },
                      "intensity": {
                        "field": "intensity"
                      },
                      "color": {
                        "field": "color"
                      },
                      "windowControler": {
                        "field": "windowControler"
                      },
                      "timer": {
                        "field": "timer"
                      },
                      "temperature": {
                        "field": "temperature"
                      },
                      "modeOven": "Grill",
                      "modeWashingMachine": {
                        "field": "modeWashingMachine"
                      },
                      "modeDishwasher": {
                        "field": "modeDishwasher"
                      },
                      "alarmCode": {
                        "field": "alarmCode"
                      },
                      "modeAC": {
                        "field": "modeAC"
                      },
                      "modeMicrowave": {
                        "field": "modeMicrowave"
                      },
                      "volume": {
                        "field": "volume"
                      },
                      "centrifugation": {
                        "field": "centrifugation"
                      },
                      "turbo": {
                        "field": "turbo"
                      },
                      "modeSprinkler": {
                        "field": "modeSprinkler"
                      },
                      "modeSprinklerTimes": {
                        "field": "modeSprinklerTimes"
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
    } else if(jFirer.is("#s-isNotFavoriteSymbol")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Device",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "ID"
                        } ]
                      }
                    },
                    "fields": {
                      "ID": {
                        "field": "ID"
                      },
                      "Name": {
                        "field": "Name"
                      },
                      "DeviceTypeID": {
                        "field": "DeviceTypeID"
                      },
                      "RoomAssociatedID": {
                        "field": "RoomAssociatedID"
                      },
                      "isFavorite": "true",
                      "isActive": {
                        "field": "isActive"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-isNotFavoriteSymbol" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-isFavoriteSymbol" ]
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
    } else if(jFirer.is("#s-isFavoriteSymbol")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Device",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "ID"
                        } ]
                      }
                    },
                    "fields": {
                      "ID": {
                        "field": "ID"
                      },
                      "Name": {
                        "field": "Name"
                      },
                      "DeviceTypeID": {
                        "field": "DeviceTypeID"
                      },
                      "RoomAssociatedID": {
                        "field": "RoomAssociatedID"
                      },
                      "isFavorite": "false",
                      "isActive": {
                        "field": "isActive"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-isFavoriteSymbol" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-isNotFavoriteSymbol" ]
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
    } else if(jFirer.is("#s-remove")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-RemoveDevice" ]
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
    } else if(jFirer.is("#s-edit")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-EditDevice" ]
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
    } else if(jFirer.is("#s-OFFimage")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Device",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "ID"
                        } ]
                      }
                    },
                    "fields": {
                      "ID": {
                        "field": "ID"
                      },
                      "Name": {
                        "field": "Name"
                      },
                      "DeviceTypeID": {
                        "field": "DeviceTypeID"
                      },
                      "RoomAssociatedID": {
                        "field": "RoomAssociatedID"
                      },
                      "isFavorite": {
                        "field": "isFavorite"
                      },
                      "isActive": "true"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OFFlabel","#s-OFFimage" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ONlabel","#s-ONimage" ]
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
    } else if(jFirer.is("#s-ONimage")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Device",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "ID"
                        } ]
                      }
                    },
                    "fields": {
                      "ID": {
                        "field": "ID"
                      },
                      "Name": {
                        "field": "Name"
                      },
                      "DeviceTypeID": {
                        "field": "DeviceTypeID"
                      },
                      "RoomAssociatedID": {
                        "field": "RoomAssociatedID"
                      },
                      "isFavorite": {
                        "field": "isFavorite"
                      },
                      "isActive": "false"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ONlabel","#s-ONimage" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-OFFlabel","#s-OFFimage" ]
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
    } else if(jFirer.is("#s-check")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": {
                      "type": "slideandfade",
                      "duration": 700
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
    } else if(jFirer.is("#s-cancel-button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-EditDevice" ]
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
    } else if(jFirer.is("#s-save-button")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-enter-name-input",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-EditDevice" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-devicename" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimUpper",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-enter-name-input",
                          "property": "jimGetValue"
                        } ]
                      },"0","12" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Device",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "ID"
                        } ]
                      }
                    },
                    "fields": {
                      "ID": {
                        "field": "ID"
                      },
                      "Name": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-enter-name-input",
                          "property": "jimGetValue"
                        },"0","12" ]
                      },
                      "DeviceTypeID": {
                        "field": "DeviceTypeID"
                      },
                      "RoomAssociatedID": {
                        "field": "RoomAssociatedID"
                      },
                      "isFavorite": {
                        "field": "isFavorite"
                      },
                      "isActive": {
                        "field": "isActive"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-EditDevice" ]
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
    } else if(jFirer.is("#s-cancel-button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-RemoveDevice" ]
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
    } else if(jFirer.is("#s-save-button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Device",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "ID"
                        } ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceType",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ "18",{
                          "field": "ID"
                        } ]
                      }
                    },
                    "fields": {
                      "ID": {
                        "field": "ID"
                      },
                      "DeviceType": {
                        "field": "DeviceType"
                      },
                      "Image": {
                        "field": "Image"
                      },
                      "DevicesNumber": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "field": "DevicesNumber"
                        },"1" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Room",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-roomAssociated",
                          "property": "jimGetValue"
                        },{
                          "field": "ID"
                        } ]
                      }
                    },
                    "fields": {
                      "ID": {
                        "field": "ID"
                      },
                      "Name": {
                        "field": "Name"
                      },
                      "RoomTypeID": {
                        "field": "RoomTypeID"
                      },
                      "DevicesNumber": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "field": "DevicesNumber"
                        },"1" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SuccessMessage" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-name-provider-dynamic-panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": {
                      "type": "slideandfade",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 2000
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
  })
  .on("pageload", ".s-3a1f2409-a066-4a23-bd3c-46d68d1af054 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-3a1f2409-a066-4a23-bd3c-46d68d1af054")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Device",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "ID"
                        } ]
                      }
                    },
                    "value": {
                      "field": "isActive"
                    }
                  }
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ONlabel","#s-ONimage" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OFFlabel","#s-OFFimage" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-OFFlabel","#s-OFFimage" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ONlabel","#s-ONimage" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Device",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "ID"
                        } ]
                      }
                    },
                    "value": {
                      "field": "isFavorite"
                    }
                  }
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-isFavoriteSymbol" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-isNotFavoriteSymbol" ]
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
    } else if(jFirer.is("#s-temperature-value")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-temperature-value" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "DeviceFunctionalities",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "field": "deviceId"
                            },{
                              "datatype": "variable",
                              "element": "deviceSelected"
                            } ]
                          }
                        },
                        "value": {
                          "field": "temperature"
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
    } else if(jFirer.is("#s-mode-label")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "value": {
                      "field": "modeOven"
                    }
                  }
                },"Top" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-selected3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "value": {
                      "field": "modeOven"
                    }
                  }
                },"Bottom" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-selected2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "value": {
                      "field": "modeOven"
                    }
                  }
                },"Top and Bottom" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-selected1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimSelectData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "DeviceFunctionalities",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "deviceSelected"
                        },{
                          "field": "deviceId"
                        } ]
                      }
                    },
                    "value": {
                      "field": "modeOven"
                    }
                  }
                },"Grill" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-selected" ]
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
    } else if(jFirer.is("#s-devicename")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-devicename" ],
                    "value": {
                      "action": "jimUpper",
                      "parameter": [ {
                        "action": "jimSelectData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Device",
                            "value": {
                              "action": "jimEquals",
                              "parameter": [ {
                                "datatype": "variable",
                                "element": "deviceSelected"
                              },{
                                "field": "ID"
                              } ]
                            }
                          },
                          "value": {
                            "field": "Name"
                          }
                        }
                      } ]
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
    } else if(jFirer.is("#s-room")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-room" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Room",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "action": "jimSelectData",
                              "parameter": {
                                "action": "jimFilterData",
                                "parameter": {
                                  "datatype": "datamaster",
                                  "datamaster": "Device",
                                  "value": {
                                    "action": "jimEquals",
                                    "parameter": [ {
                                      "datatype": "variable",
                                      "element": "deviceSelected"
                                    },{
                                      "field": "ID"
                                    } ]
                                  }
                                },
                                "value": {
                                  "field": "RoomAssociatedID"
                                }
                              }
                            },{
                              "field": "ID"
                            } ]
                          }
                        },
                        "value": {
                          "field": "Name"
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
    } else if(jFirer.is("#s-roomAssociated")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-roomAssociated" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Device",
                          "value": {
                            "action": "jimEquals",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "deviceSelected"
                            },{
                              "field": "ID"
                            } ]
                          }
                        },
                        "value": {
                          "field": "RoomAssociatedID"
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
    }
  });