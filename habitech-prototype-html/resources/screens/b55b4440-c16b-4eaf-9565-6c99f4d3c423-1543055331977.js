jQuery("#simulation")
  .on("click", ".s-b55b4440-c16b-4eaf-9565-6c99f4d3c423 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-deviceTypeImage")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "selectedDeviceType" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-deviceTypeID",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NameProvider" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
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
    } else if(jFirer.is("#s-plus_1")) {
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
                    "target": [ "#s-NameProvider" ]
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-enter-name-input" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "action": "jimSelectData",
                          "parameter": {
                            "action": "jimFilterData",
                            "parameter": {
                              "datatype": "datamaster",
                              "datamaster": "Room",
                              "value": {
                                "action": "jimEquals",
                                "parameter": [ {
                                  "datatype": "variable",
                                  "element": "currentRoom"
                                },{
                                  "field": "ID"
                                } ]
                              }
                            },
                            "value": {
                              "field": "Name"
                            }
                          }
                        },{
                          "action": "jimSelectData",
                          "parameter": {
                            "action": "jimFilterData",
                            "parameter": {
                              "datatype": "datamaster",
                              "datamaster": "DeviceType",
                              "value": {
                                "action": "jimEquals",
                                "parameter": [ {
                                  "datatype": "variable",
                                  "element": "selectedDeviceType"
                                },{
                                  "field": "ID"
                                } ]
                              }
                            },
                            "value": {
                              "field": "DeviceType"
                            }
                          }
                        } ]
                      },"0","12" ]
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Device",
                    "fields": {
                      "ID": {
                        "datatype": "variable",
                        "element": "devicesCounter"
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
                        "datatype": "variable",
                        "element": "selectedDeviceType"
                      },
                      "RoomAssociatedID": {
                        "datatype": "variable",
                        "element": "currentRoom"
                      },
                      "isFavorite": {
                        "datatype": "property",
                        "target": "#s-add-favorites-input",
                        "property": "jimGetValue"
                      },
                      "isActive": "false"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "DeviceFunctionalities",
                    "fields": {
                      "deviceId": {
                        "datatype": "variable",
                        "element": "devicesCounter"
                      },
                      "intensity": {
                        "action": "jimSelectData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Functionalities",
                            "value": {
                              "action": "jimEquals",
                              "parameter": [ {
                                "datatype": "variable",
                                "element": "selectedDeviceType"
                              },{
                                "field": "deviceTypeId"
                              } ]
                            }
                          },
                          "value": {
                            "field": "intensity"
                          }
                        }
                      },
                      "color": {
                        "action": "jimSelectData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Functionalities",
                            "value": {
                              "action": "jimEquals",
                              "parameter": [ {
                                "datatype": "variable",
                                "element": "selectedDeviceType"
                              },{
                                "field": "deviceTypeId"
                              } ]
                            }
                          },
                          "value": {
                            "field": "color"
                          }
                        }
                      },
                      "windowControler": null,
                      "timer": null,
                      "temperature": {
                        "action": "jimSelectData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Functionalities",
                            "value": {
                              "action": "jimEquals",
                              "parameter": [ {
                                "field": "deviceTypeId"
                              },{
                                "datatype": "variable",
                                "element": "selectedDeviceType"
                              } ]
                            }
                          },
                          "value": {
                            "field": "temperature"
                          }
                        }
                      },
                      "modeOven": {
                        "action": "jimSelectData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Functionalities",
                            "value": {
                              "action": "jimEquals",
                              "parameter": [ {
                                "datatype": "variable",
                                "element": "selectedDeviceType"
                              },{
                                "field": "deviceTypeId"
                              } ]
                            }
                          },
                          "value": {
                            "field": "modeOven"
                          }
                        }
                      },
                      "modeWashingMachine": null,
                      "modeDishwasher": null,
                      "alarmCode": null,
                      "modeAC": null,
                      "modeMicrowave": {
                        "action": "jimSelectData",
                        "parameter": {
                          "action": "jimFilterData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "Functionalities",
                            "value": {
                              "action": "jimEquals",
                              "parameter": [ {
                                "datatype": "variable",
                                "element": "selectedDeviceType"
                              },{
                                "field": "deviceTypeId"
                              } ]
                            }
                          },
                          "value": {
                            "field": "modeMicrowave"
                          }
                        }
                      },
                      "volume": null,
                      "centrifugation": null,
                      "turbo": null,
                      "modeSprinkler": null,
                      "modeSprinklerTimes": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "devicesCounter" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "devicesCounter"
                      },"1" ]
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
                          "field": "ID"
                        },{
                          "datatype": "variable",
                          "element": "currentRoom"
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
                        "action": "jimPlus",
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
                      "datamaster": "DeviceType",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "selectedDeviceType"
                        },{
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
                        "action": "jimPlus",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-name-provider-dynamic-panel" ]
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/97132095-5005-4e5c-9ccf-bb4f038b3dea",
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
  });