// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index/business-plan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showBuisnessPlan = showBuisnessPlan;

var _index = require("./index.js");

function showBuisnessPlan() {
  _index.header.innerHTML = `GreenSway`;
  _index.main.innerHTML = `
    <div id="div">
        <h1>Affärsplan</h1>
    </div>    
    <div class="flex.container">
        <div id="div">
            <p>
                Jag kallar min idé <span id="copy"><span>GreenSway</span></span>. Green som kan associeras med både miljö och med pengar och ”sway” 
                (eng.) med betydelse: svänga eller inflytande. Namnet beskriver vad jag vill åstadkomma med min lösning eftersom det handlar om att 
                återställa balansen gällande ansvar för kostnader och miljöpåverkan genom att ge individen större inflytande.
            </p>
        </div>
        <div id="div">
            <h2>Bakgrund & problemet</h2>
            <p><br/>
                Med en gedigen bakgrund som hyresgäst och engagemang i hyresgästföreningen har jag följt flera olika projekt för att få bukt på 
                sopsortering utan något större eller varaktigt resultat. Jag har också under alla år både upplevt och fått höra från både värdar och 
                boende om alla problem som uppstår i och omkring allmänna tvättstugor. Sophanteringens och tvättstugornas drift och underhåll , 
                tar idag upp till ca 20% av hyresvärdens totala driftskostnader. Samtidigt som miljöhus och tvättstugor är ständigt i särklass det 
                sämsta mätpunkterna i NKI undersökningar runt om i landet bland allmännyttans bestånd, runt 70% missnöjda hyresgäster. Därför har jag 
                länge försökt klura på lösningar som gagnar alla och samtidigt tar hänsyn till miljön.Vad är det som kostar så mycket och skapar missnöje?
            </p>
            <ul>
                <li>
                    I miljöhusen tampas vi idag med stora problem med dumpning av grovsopor, undermålig sortering och allmän nedskräpning. 
                    Detta gör hyresgäster än mindre motiverade att göra rätt.
                </li>
                <li>
                    I Tvättstugorna har vi ineffektiva bokningssystem, i form av låstavlor som möjliggör omedveten blockering av tvättider och det råder
                    ständig brist på tillgängliga tvättider. Dessutom finns en stor osäkerhet att behålla den bokade tiden. 
                    Och naturligtvis har vi problem med att städningen inte sköts.
                </li>
            </ul>
            <p>
                Jag tror att kärnan till alla problem är att hyresgästens handlingar leder till konsekvenser för hyresvärden.
                För att lösa problemet behöver vi återställa balansen gällande ansvar, skyldigheter och rättigheter.
            </p>
        </div>
    </div>
    <div class="flex.container"><div id="div">
        <div id="div"><h2>Syfte & Mål</h2></div>
            <p>
                Mitt främsta syfte är att öka medvetenheten om och minska miljöpåverkan. Även att:
            </p>
            <ul>
                <li>minska hyresvärdens kostnader för sophantering.</li>
                <li> öka individens ansvar och rättighet till kontroll över både miljöpåverkan och kostnader relaterat till sophantering och allmänna 
                tvättstugor.</li>
                <li>öka hyresgästernas trivsel och stärka relationen till hyresvärden.</li>
            </ul>
            <p>
                Redan först året ska bostadsbolagets kostnader reduceras med >50% för drift och underhåll av sophantering och allmänna tvättstugor. 
                Inom 3 år ska:
            </p>
            <ul>
                <li>mängden restavfall reduceras med 50%.</li>
                <li>el och vattenförbrukning i allmänna utrymmen minskas med 25%</li>
                <li>NKI mätpunkter för miljöhus och tvättstugor ökas till att matcha bolagets resterande mätpunkter.</li>
            </ul>
        </div>
    </div>
    <div id="div">
        <div id="div">
        <h2>Lösning & Omfattning</h2>
        </div>
            <p>
                Allt detta genom maximalt utnyttjande av allmänna utrymmen och ett webb-system som utvecklar befintligt bostadsbestånd till ett mer 
                klimatsmart boende (mer detaljer om systemet hittar du under Projektidé).
            </p>
            <p>
                Systemet ska vara skalbart med ett digitalt bokningssystem för tvättstugan som även inkluderar digitala lås för tillträde vid bokad tid. 
                Det ska även finnas funktionalitet som:
            </p>
            <ul>
                <li>identifiering och registrering av el- och vatten-förbrukning samt avfall för att informera hyresgästen och fakturera kostnaderna.</li>
                <li>tillåter översikt och statistik för hyresgästen och även för bostadsbolaget att se total förbrukning.</li>
                <li>kommunikation mellan hyresgäst och värden om tex felanmälan, driftuppehåll, rapportering angående bristfällig städning.</li>
            </ul>
        </div>
        <hr />
        <div id="div">
            <h3 class="user">Fotnot:</h3> 
            <p class="user">
                Mer än halvägs in i utarbetandet av prototypen har jag blivit varse om att det är emot hyreslagen att extrahera avfallsomkostnader från 
                hyran. Efter att jag har fått kännedom om att Nordvästra Skånes Renhållnings AB nyligen (maj 2021) anordnat en 
                <a href="https://nsr.se/workshop-teknisk-losning-for-matning-av-hushallsavfall/" target="_blank" id="link">workshop</a> 
                för att ta fram en mjukvara för individuell avfallsmätning i flerfamiljshus har jag har valt att ändå fortsätta med projektet. 
                Intresset för att hitta en lösning indikerar att behovet finns och att en ändring i lagen inte är omöjlig eller särkilt långt fram i tiden. 
                Jag ser ljust på framtiden för mitt projekt och tänker utforska möjligheten att använda lösningen i bostadsrättsföreningar.
            </p> 
        </div>
    </div>`;
}
},{"./index.js":"src/index/index.js"}],"src/index/product-idea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showProductIdea = showProductIdea;

var _index = require("./index.js");

function showProductIdea() {
  _index.header.innerHTML = `GreenSway`;
  _index.main.innerHTML = `
    <div>
        <h1>Produktidé</h1>
    </div> 
    <div class="flex.container">
    <div id="div">
        <div>
            <p>
                Min lösning för att uppnå syftet innefattar först och främst ett komplett mjukvarusystem, 
                förpackat i en användarvänlig webb-app med funktionalitet som:
            </p>
        </div>
            <ul>
                <li>tillåter individuella mätningar och fakturering. Genom att extrahera schablonkostnaderna för sophantering, 
                el- och vatten-förbrukning i tvättstugan från hyran och i stället fakturera hyresgästen för den verkliga kostnaden anser vi att 
                balansen återställs.</li>
                <li>använder digitala lås och identifiering för åtkomst till tvättstugor och miljöhus.</li>
                <li>i miljöhuset kontrolleras, vägs och registreras avfallet på identifierad hyresgäst som får direkt återkoppling om aktuell 
                kostnad och miljöpåverkan.</li>
                <li>ett bokningssystem för tvättstugor. Bokning av tvättid sker bekvämt hemifrån via en app, vilket förhindrar blockering av tider. 
                Endast vid bokat tid tillåts man tillträde till tvättstugan via den digital identifieringen, hyresgästen är säker på att få behålla 
                sitt bokade pass.</li>
                <li>registrerar förbrukning av el och vatten. För att göra hyresgästen medveten om resursförbrukning och kostnader.</li>
                <li>visa statistik och översikt . Både för hyresgästen och för hyresvärden som ges möjlighet att se den total förbrukning</li>
                <li>möjliggör kommunikation mellan hyresgäst och hyresvärd angående tex felanmälan och driftuppehåll</li>
                <li>implementation av behovsstyrd drift och underhåll. Sensorer i soptunnorna, IoT maskiner i tvättstugor som kan förmedla 
                statusrapporter.</li>
            </ul>
        </div>  
    </div>
    <div id="div">
        <p>För att få ut det mesta av systemet förespråkar jag även</p>
        <ul>
            <li>effektiviserad användning av allmänna utrymmen, eventuellt med en del ombyggnationer. 
            Här finns det stort spelrum att skräddarsy lösningen ( jag ger ett exempel på detta i min Affärsplan).</li>
        </ul>
    </div>
        <hr />
        <div id="div">
        <h3 class="user">Fotnot:</h3> 
            <p class="user">
                Mer än halvägs in i utarbetandet av prototypen har jag blivit varse om att det är emot hyreslagen att extrahera avfallsomkostnader 
                från hyran. Efter att jag har fått kännedom om att Nordvästra Skånes Renhållnings AB nyligen (maj 2021) anordnat en 
                <a href="https://nsr.se/workshop-teknisk-losning-for-matning-av-hushallsavfall/" target="_blank" id="link">workshop</a> 
                för att ta fram en mjukvara för individuell avfallsmätning i flerfamiljshus har jag har valt att ändå fortsätta med projektet. 
                Intresset för att hitta en lösning indikerar att behovet finns och att en ändring i lagen inte är omöjlig eller särkilt långt fram i 
                tiden. Jag ser ljust på framtiden för mitt projekt och tänker utforska möjligheten att använda lösningen i bostadsrättsföreningar.
            </p> 
        </div>
    </div>`;
}
},{"./index.js":"src/index/index.js"}],"src/index/files/GreenSway-Affärsplan.pdf":[function(require,module,exports) {
module.exports = "/GreenSway-Affärsplan.28dfc14c.pdf";
},{}],"src/index/contact-information.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showContactInformation = showContactInformation;

var _index = require("./index.js");

var _GreenSwayAffärsplan = _interopRequireDefault(require("./files/GreenSway-Aff\xE4rsplan.pdf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showContactInformation() {
  _index.header.innerHTML = `"WiviWonderWoman"`;
  _index.main.innerHTML = `<div id="div"><h1>Intresserad av att veta mera?</h1><h2 class="user">Kul! Klicka på ikonerna för att:</h2></div>
    <div class="flex-container">
        <div id="div">
            <h3 class="contact">Läsa hela affärsplanen (pdf):</h3>
            <sup id="icon"><a href="${_GreenSwayAffärsplan.default}" target=":_blank"><i class="far fa-file-alt"></i></a></sup>
        </div>
        <div id="div">
            <h3 class="contact">Kontakta mig via mail:</h3>
            <sup id="icon"><a href="mailto:w.grapenholt@gmail.com" target=":_blank"><i class="fas fa-at"></i></a></sup>
        </div>
        <div id="div">
            <h3 class="user">Nyfiken på mer information om mig?</h3>
            <h3 class="contact">Titta gärna in på någon av nedanstående länkar</h3>
        
        <pre class="user"><p>två mer yrkesrelaterade:                 och två lite mer privata:</p> </pre>
            <ul class="nav-list">
                <li><a href="https://github.com/WiviWonderWoman" target="_blank"><i class="fab fa-github-alt"></i></a></li>
                <li><a href="https://www.linkedin.com/in/wivianne-grapenholt-673b701b6/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/wivianne_grapenholt/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/wivi.grapenholt" target="_blank"><i class="fab fa-facebook"></i></a></li>
            </ul>
            
        </div>
    </div>`;
}
},{"./index.js":"src/index/index.js","./files/GreenSway-Affärsplan.pdf":"src/index/files/GreenSway-Affärsplan.pdf"}],"src/index/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = exports.main = void 0;

var _businessPlan = require("./business-plan.js");

var _productIdea = require("./product-idea.js");

var _contactInformation = require("./contact-information.js");

const main = document.getElementById('main');
exports.main = main;
const header = document.getElementById('header');
exports.header = header;
const planBtn = document.getElementById('plan');
const ideaBtn = document.getElementById('idea');
const contactBtn = document.getElementById('contact');
planBtn.addEventListener('click', () => {
  (0, _businessPlan.showBuisnessPlan)();
});
ideaBtn.addEventListener('click', () => {
  (0, _productIdea.showProductIdea)();
});
contactBtn.addEventListener('click', () => {
  (0, _contactInformation.showContactInformation)();
});
},{"./business-plan.js":"src/index/business-plan.js","./product-idea.js":"src/index/product-idea.js","./contact-information.js":"src/index/contact-information.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54367" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index/index.js"], null)
//# sourceMappingURL=/index.96c53013.js.map