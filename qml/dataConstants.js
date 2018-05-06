var temps   =
  { "Fahrenheit": { "Fahrenheit": function(f) { return f;                },
                    "Celsius"   : function(f) { return (f - 32) * 5 / 9; },
                    "Kelvin"    : function(f) { return (f + 459.67) *
                                                       5 / 9;            } },
    "Celsius"   : { "Fahrenheit": function(c) { return (c * 1.8) + 32; },
                    "Celsius"   : function(c) { return c;              },
                    "Kelvin"    : function(c) { return c + 273.15;     } },
    "Kelvin"    : { "Fahrenheit": function(k) { return (k * 9 / 5) -
                                                       459.67;       },
                    "Celsius"   : function(k) { return k - 273.15;   },
                    "Kelvin"    : function(k) { return k;            } }     };
var vols    = { "Tablespoons (U. S.)"    : 1,
                "Teaspoons (U. S.)"      : 1 / 3,
                "Cups"                   : 16,
                "Fluid Ounces (U. S.)"   : 2,
                "Fluid Ounces (U. K.)"   : 1.921519881,
                "Pinches"                : 1 / 48,
                "Pints (liquid, U. S.)"  : 32,
                "Pints (dry, U. S.)"     : 74.473419913 / 2,
                "Quarts (liquid, U. S.)" : 64,
                "Quarts (dry, U. S.)"    : 74.473419913,
                "Gallons (liquid, U. S.)": 256,
                "Gallons (dry, U. S.)"   : 74.473419913 * 4,
                "Liters"                 : 67.6280454,
                "Drops"                  : 1 / 180,
                "Dashes"                 : 1 / 24,
                "Gill"                   : 8,
                "Firkins (U. S.)"        : 2304 /* 2271.2470704 */,
                "Firkins (U. K., beer)"  : 2766.98977104,
                "Hogshead"               : 16128,
                "Pecks (U. S.)"          : 74.473419913 * 8,
                "Pecks (U. K.)"          : 614.886361858486,
                "Bushels (U. S.)"        : 74.473419913 * 32,
                "Bushels (U. K.)"        : 2459.54544743,
                "Cubic Inches (U. S.)"   : 1.108225108,
                "Jiggers"                : 2.95735296875,
                "Tablespoons (U. K.)"    : 1.200397806,
                "Teaspoons (U. K.)"      : 0.400316807,
                "Tablespoons (metric)"   : 1.0144207,
                "Teaspoons (metric)"     : 0.33814023,
                "Milliliters"            : 0.067628045,
                "Fluid Dram"             : 0.250017,
                "Smidgen"                : 1 / 96            };
// All grams equal to 1 Tbs.
var foods   = { "Alcohol (ethyl)"               : 11.608497559168,
                "Alcohol (methyl)"              : 11.629938368101,
                "Alcohol (propyl)"              : 11.828820354409,
                "Almonds (flaked)"              : 85 / 16,
                "Almonds (ground)"              : 100 / 16,
                "Baking Powder"                 : 13 + 4 / 5,
                "Baking Soda"                   : 13 + 4 / 5,
                "Beans (kidney)"                : 12 + 1 / 5,
                "Blackberries"                  : 9.15,
                "Blueberries"                   : 9.45,
                "Bread Crumbs"                  : 120.000000254 / 16,
                "Buckwheat Groats"              : 10 + 5 / 8,
                "Butter"                        : 14.175,
                "Cacao"                         : 7.375,
                "Cheese (grated Parmesan)"      : 5,
                "Cheese (grated Cheddar)"       : 10,
                "Chickpeas"                     : 12.500000027,
                "Cinnamon"                      : 7.800000017,
                "Coconut (shredded, disiccated)": 5.8125,
                "Coffee (ground)"               : 0.6625,
                "Cottage Cheese"                : 20,
                "Cranberries (dried)"           : 7.5,
                "Cranberries (fresh or frozen)" : 6.1875,
                "Cream"                         : 15,
                "Flour (corn)"                  : 9.375,
                "Flour (potato)"                : 10,
                "Flour (soy)"                   : 5.25,
                "Flour (all-purpose)"           : 7.8125,
                "Flour (whole wheat)"           : 8.09986375,
                "Flour (wholemeal)"             : 8.09986375,
                "Gelatin"                       : 9.25,
                "Hazelnuts (finely chopped)"    : 13.75,
                "Honey"                         : 21.25,
                "Jam"                           : 20.3125,
                "Ketchup (Catsup)"              : 17.000000036,
                "Lard"                          : 12.8125,
                "Lentil (boiled)"               : 12.375000026,
                "Lentil (dry/pink or red, raw)" : 12.000000025,
                "Lentil (sprouted, raw)"        : 4.81250001,
                "Flaxseed (Linseed, ground)"    : 6.6,
                "Flaxseed (Linseed, whole)"     : 14.02,
                "Margarine"                     : 13.5625,
                "Mayonnaise"                    : 15,
                "Milk"                          : 15,
                "Milk (granulated)"             : 4.2,
                "Milk (powdered)"               : 8.25,
                "Oatmeal (old fashioned/rolled)": 5.625,
                "Oatmeal (steel cut)"           : 9.75,
                "Oatmeal (steel cut)"           : 9.75,
                "Oil (cottonseed)"              : 13.6,
                "Oil (flaxseed)"                : 13.6,
                "Oil (olive)"                   : 13.5,
                "Oil (peanut)"                  : 13.5,
                "Oil (sesame)"                  : 13.6,
                "Oil (soybean)"                 : 13.6,
                "Oil (vegetable: avocado)"      : 13.958705953,
                "Oil (vegetable: canola)"       : 13.958705953,
                "Oil (vegetable: most)"         : 13.6,
                "Oil (vegetable: mustard)"      : 13.958705953,
                "Oil (vegetable: sunflower)"    : 13.958705953,
                "Oil (wheat germ)"              : 13.6,
                "Paprika (ground)"              : 6.800000014,
                "Peas (green, frozen)"          : 8.375000018,
                "Pepper (black, ground)"        : 6.900000015,
                "Poppy Seeds"                   : 8.795167692,
                "Pumpkin Seeds"                 : 8.625,
                "Raisin"                        : 9.06,
                "Rice (brown)"                  : 12.05,
                "Rice (white)"                  : 11.73,
                "Salt"                          : 17.0625,
                "Semolina"                      : 10.4375,
                "Sesame Seeds"                  : 8.000000017,
                "Sugar (granulated)"            : 12.5,
                "Sugar (brown, packed)"         : 453.59237 / 36,
                "Sugar (icing)"                 : 7.8125,
                "Sunflower Seeds (dry roasted)" : 8.000000017,
                "Sunflower Seeds (toasted)"     : 8.375000018,
                "Vanilla Extract"               : 13.000000028,
                "Vanilla Sugar"                 : 12.685714286,
                "Vinegar (balsamic)"            : 15.937500034,
                "Vinegar (cider)"               : 14.937500032,
                "Vinegar (distilled)"           : 14.875000032,
                "Vinegar (red wine)"            : 14.937500032,
                "Walnuts (chopped)"             : 7.3125,
                "Water"                         : 14.7867648         };
var weights = { "Grams"                        : 1,
                "Ounces"                       : 28.349523124662777,
                "Pounds"                       : 453.5923700100354,
                "Kilogram"                     : 1000,
                "Milligrams"                   : 0.001,
                "Tonnes"                       : 1000000,
                "Short Tons (U. S.)"           : 907184.9958859162,
                "Long Tons (U. K.)"            : 1016046.9373043159,
                "Stones"                       : 6350.294971201412,
                "Micrograms"                   : 1e-06,
                "Firkin (U. K., butter/cheese)": 25401.1727200000023,
                "Dram"                         : 1.7718451953125     };
