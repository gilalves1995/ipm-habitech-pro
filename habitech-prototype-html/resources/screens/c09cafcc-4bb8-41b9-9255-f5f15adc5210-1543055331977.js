jQuery("#simulation")
  .on("click", ".s-c09cafcc-4bb8-41b9-9255-f5f15adc5210 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-isNotFavoriteSymbol")) {
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
                        "parameter": [ "15",{
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
  .on("pageload", ".s-c09cafcc-4bb8-41b9-9255-f5f15adc5210 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-c09cafcc-4bb8-41b9-9255-f5f15adc5210")) {
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