"use strict";
(self["webpackChunkspotify"] = self["webpackChunkspotify"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_game_finish_finish_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game/finish/finish.component */ 9512);
/* harmony import */ var _components_game_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game/main/main.component */ 2862);
/* harmony import */ var _components_game_play_play_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game/play/play.component */ 9461);
/* harmony import */ var _components_game_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game/start/start.component */ 5052);
/* harmony import */ var _components_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-callback/login-callback.component */ 5174);
/* harmony import */ var _components_search_album_search_album_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/album-search/album-search.component */ 6022);
/* harmony import */ var _components_search_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/main-search/main-search.component */ 8302);
/* harmony import */ var _components_search_playlist_search_playlist_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/playlist-search/playlist-search.component */ 5907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











const routes = [
    { path: '', redirectTo: '/spotify', pathMatch: 'full' },
    { path: 'spotify', component: _components_search_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_6__.MainSearchComponent,
        children: [
            { path: 'album', component: _components_search_album_search_album_search_component__WEBPACK_IMPORTED_MODULE_5__.AlbumSearchComponent },
            { path: 'playlist', component: _components_search_playlist_search_playlist_search_component__WEBPACK_IMPORTED_MODULE_7__.PlaylistSearchComponent },
        ] },
    { path: 'callback', component: _components_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_4__.LoginCallbackComponent },
    { path: 'game', component: _components_game_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent,
        children: [
            { path: '', component: _components_game_start_start_component__WEBPACK_IMPORTED_MODULE_3__.StartComponent },
            { path: 'play', component: _components_game_play_play_component__WEBPACK_IMPORTED_MODULE_2__.PlayComponent },
            { path: 'finish', component: _components_game_finish_finish_component__WEBPACK_IMPORTED_MODULE_0__.FinishComponent },
        ] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api/spotify.service */ 1066);
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/player.service */ 4115);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = function () {
  return ["/spotify"];
};

class AppComponent {
  constructor(spotify, player) {
    this.spotify = spotify;
    this.player = player;
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player.initSpotifyWebPlayer(this.spotify.getToken());
      this.player.connect();
    };

    window.onbeforeunload = () => this.player.disconnect();

    ;
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__.SpotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 5,
  vars: 2,
  consts: [[1, "center"], [2, "text-decoration", "none", 3, "routerLink"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Spordlfy");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
  styles: [".center[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 60%;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAiXX0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login-callback/login-callback.component */ 5174);
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/player/player.component */ 1985);
/* harmony import */ var _components_game_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game/main/main.component */ 2862);
/* harmony import */ var _components_game_play_play_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game/play/play.component */ 9461);
/* harmony import */ var _components_game_start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game/start/start.component */ 5052);
/* harmony import */ var _components_game_finish_finish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/game/finish/finish.component */ 9512);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_search_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/main-search/main-search.component */ 8302);
/* harmony import */ var _components_search_playlist_search_playlist_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/playlist-search/playlist-search.component */ 5907);
/* harmony import */ var _components_search_album_search_album_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search/album-search/album-search.component */ 6022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_search_album_search_album_search_component__WEBPACK_IMPORTED_MODULE_10__.AlbumSearchComponent,
        _components_search_playlist_search_playlist_search_component__WEBPACK_IMPORTED_MODULE_9__.PlaylistSearchComponent,
        _components_login_callback_login_callback_component__WEBPACK_IMPORTED_MODULE_2__.LoginCallbackComponent,
        _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__.PlayerComponent,
        _components_game_main_main_component__WEBPACK_IMPORTED_MODULE_4__.MainComponent,
        _components_game_play_play_component__WEBPACK_IMPORTED_MODULE_5__.PlayComponent,
        _components_game_start_start_component__WEBPACK_IMPORTED_MODULE_6__.StartComponent,
        _components_game_finish_finish_component__WEBPACK_IMPORTED_MODULE_7__.FinishComponent,
        _components_search_main_search_main_search_component__WEBPACK_IMPORTED_MODULE_8__.MainSearchComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule] }); })();


/***/ }),

/***/ 9512:
/*!************************************************************!*\
  !*** ./src/app/components/game/finish/finish.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinishComponent": () => (/* binding */ FinishComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);






function FinishComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Good Job! ", ctx_r0.track.name, " is the correct answer.");
} }
function FinishComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Wrong! ", ctx_r1.track.name, " is the correct answer.");
} }
const _c0 = function () { return ["/game/play"]; };
class FinishComponent {
    constructor(game) {
        this.game = game;
        this.guessedCorrectly = false;
    }
    ngOnInit() {
        this.guessedCorrectly = this.game.guessedCorrect;
        this.track = this.game.currentTrack;
    }
}
FinishComponent.ɵfac = function FinishComponent_Factory(t) { return new (t || FinishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
FinishComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FinishComponent, selectors: [["app-finish"]], decls: 6, vars: 4, consts: [[4, "ngIf"], ["mat-raised-button", "", 3, "routerLink"]], template: function FinishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FinishComponent_mat_card_0_Template, 4, 1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FinishComponent_mat_card_1_Template, 4, 1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card")(3, "mat-card-content")(4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Next Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guessedCorrectly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.guessedCorrectly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5pc2guY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 2862:
/*!********************************************************!*\
  !*** ./src/app/components/game/main/main.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);



class MainComponent {
    constructor(route, game) {
        this.route = route;
        this.game = game;
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 1, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 9461:
/*!********************************************************!*\
  !*** ./src/app/components/game/play/play.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayComponent": () => (/* binding */ PlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../player/player.component */ 1985);
















function PlayComponent_mat_list_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item")(1, "div", 9)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const guess_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](guess_r3);
  }
}

function PlayComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r4, " ");
  }
}

class PlayComponent {
  constructor(game, router) {
    this.game = game;
    this.router = router;
    this.guessResult = '';
    this.trackGuess = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.guessNumber = 0;
    this.guesses = [];
    this.game.tracks$.subscribe(tracks => {
      this.options = tracks.map(function (track) {
        return track.name;
      });
    });
  }

  ngOnInit() {
    this.filteredOptions = this.trackGuess.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(value => this._filter(value || '')));
    this.game.chooseRandomSong();
    this.game.playSong();
    this.guessNumber = 0;
    this.guesses = [];
  }

  playAgain() {
    this.game.playSongAgain();
  }

  _filter(value) {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  skipTry() {
    this.game.skip();
    this.guesses[this.guessNumber] = '    skipped';
    this.guessNumber++;

    if (this.guessNumber > 4) {
      this.router.navigateByUrl('/game/finish');
    }
  }

  checkGuess() {
    if (this.trackGuess.getRawValue() === this.game.currentTrack.name) {
      this.game.correctGuess();
      this.router.navigateByUrl('/game/finish');
    } else {
      this.game.incorrectGuess();
      this.guesses[this.guessNumber] = '[X] ' + this.trackGuess.getRawValue();
      this.guessNumber++;
    }

    this.trackGuess.setValue('');

    if (this.guessNumber > 4) {
      this.router.navigateByUrl('/game/finish');
    }
  }

}

PlayComponent.ɵfac = function PlayComponent_Factory(t) {
  return new (t || PlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

PlayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PlayComponent,
  selectors: [["app-play"]],
  decls: 28,
  vars: 7,
  consts: [[4, "ngFor", "ngForOf"], [1, "example-form"], ["appearance", "fill", 1, "full-width"], ["type", "text", "placeholder", "Pick a track", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete", "keyup.enter"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "flex-button", 3, "click"], ["matLine", ""], [3, "value"]],
  template: function PlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "mat-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PlayComponent_mat_list_item_3_Template, 4, 1, "mat-list-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-player");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card")(7, "mat-card-content")(8, "form", 1)(9, "mat-form-field", 2)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Guess:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function PlayComponent_Template_input_keyup_enter_12_listener() {
        return ctx.checkGuess();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-autocomplete", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PlayComponent_mat_option_15_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-card")(18, "mat-card-content")(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7)(22, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_22_listener() {
        return ctx.skipTry();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Skip");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_24_listener() {
        return ctx.playAgain();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Play again");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_26_listener() {
        return ctx.checkGuess();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.guesses);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.trackGuess)("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 5, ctx.filteredOptions));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.guessResult);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatLine, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _player_player_component__WEBPACK_IMPORTED_MODULE_1__.PlayerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  width: 100%;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-button[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUVBO0VBQ0UsV0FBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7QUFGRiIsImZpbGUiOiJwbGF5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1idXR0b24ge1xuICBtYXJnaW46IGF1dG87XG59Il19 */"]
});

/***/ }),

/***/ 5052:
/*!**********************************************************!*\
  !*** ./src/app/components/game/start/start.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartComponent": () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);










const _c0 = function () { return ["play"]; };
function StartComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "div", 1)(3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Do you want to start a game with these songs?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Play!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function StartComponent_mat_card_2_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item")(1, "div", 5)(2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const track_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](track_r3.artists[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](track_r3.name);
} }
function StartComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StartComponent_mat_card_2_mat_list_item_5_Template, 6, 2, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.listName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.tracks);
} }
class StartComponent {
    constructor(game) {
        this.game = game;
        this.listName = '';
        this.trackSubscription = game.tracks$.subscribe(tracks => {
            this.tracks = tracks;
        });
        this.listNameSubscription = game.listName$.subscribe(listName => {
            this.listName = listName;
        });
    }
    startGame() {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.trackSubscription.unsubscribe();
        this.listNameSubscription.unsubscribe();
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
StartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 3, vars: 2, consts: [[4, "ngIf"], [2, "text-align", "center", "display", "flex"], [2, "margin", "auto", "margin-left", "0%"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "auto", 3, "routerLink"], [4, "ngFor", "ngForOf"], ["matLine", ""], [2, "float", "left"], [2, "float", "right"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StartComponent_mat_card_0_Template, 7, 2, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StartComponent_mat_card_2_Template, 6, 2, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tracks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tracks);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatLine, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["span[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InN0YXJ0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });


/***/ }),

/***/ 5174:
/*!***********************************************************************!*\
  !*** ./src/app/components/login-callback/login-callback.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCallbackComponent": () => (/* binding */ LoginCallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/spotify.service */ 1066);



class LoginCallbackComponent {
    constructor(router, route, spotifyService) {
        this.router = router;
        this.route = route;
        this.spotifyService = spotifyService;
    }
    ngOnInit() {
        this.route.fragment.subscribe((fragment) => {
            var access_token = new URLSearchParams(fragment).get('access_token');
            if (access_token != null) {
                this.spotifyService.setAccessToken(access_token);
            }
            this.router.navigateByUrl('/spotify');
        });
    }
}
LoginCallbackComponent.ɵfac = function LoginCallbackComponent_Factory(t) { return new (t || LoginCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__.SpotifyService)); };
LoginCallbackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginCallbackComponent, selectors: [["app-login-callback"]], decls: 2, vars: 0, template: function LoginCallbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "login-callback works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1jYWxsYmFjay5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 1985:
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerComponent": () => (/* binding */ PlayerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/player.service */ 4115);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);






class PlayerComponent {
    constructor(player, ngZone) {
        this.player = player;
        this.ngZone = ngZone;
        this.progressValue = 0;
        this.bufferValue = 0;
        this.paused = true;
        player.position$.subscribe(position => {
            this.progressValue = (position.valueOf() / this.trackDuration) * 100;
            // this.bufferValue = ((position.valueOf() + 1000)/this.trackDuration) * 100;
        });
        player.paused$.subscribe(paused => {
            this.paused = paused;
        });
        player.currentTrack$.subscribe(currentTrack => {
            this.ngZone.run(() => {
                this.currentTrack = currentTrack.name;
                this.trackDuration = currentTrack.duration_ms;
            });
        });
        this.timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0, 1000);
        this.timer.subscribe((t) => {
            if (!this.paused) {
                this.progressValue++;
            }
        });
    }
    previousTrack() {
        this.player.previousTrack();
    }
    togglePlay() {
        this.player.togglePlay();
    }
    nextTrack() {
        this.player.nextTrack();
    }
    ngOnDestroy() {
    }
    ngOnInit() {
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_0__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
PlayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 3, vars: 2, consts: [["mode", "determinate", 1, "example-margin", 3, "value", "bufferValue"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.progressValue)("bufferValue", ctx.bufferValue);
    } }, dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBar, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 6022:
/*!**************************************************************************!*\
  !*** ./src/app/components/search/album-search/album-search.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumSearchComponent": () => (/* binding */ AlbumSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/spotify.service */ 1066);
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/player.service */ 4115);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);













const _c0 = function () { return ["/game"]; };
function AlbumSearchComponent_mat_card_7_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlbumSearchComponent_mat_card_7_mat_list_item_3_Template_mat_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const album_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.startGame(album_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6)(2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const album_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](album_r2.artists[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](album_r2.name);
} }
function AlbumSearchComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AlbumSearchComponent_mat_card_7_mat_list_item_3_Template, 6, 4, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.albums);
} }
class AlbumSearchComponent {
    constructor(spotify, player, game) {
        this.spotify = spotify;
        this.player = player;
        this.game = game;
        this.albums = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
    }
    search() {
        if (this.searchForm.getRawValue() != null) {
            this.spotify.albumSearch(this.searchForm.getRawValue()).subscribe((result) => {
                this.albums = result.albums.items;
            });
        }
    }
    play(album) {
        this.player.playAlbum(album.uri);
    }
    startGame(album) {
        this.game.loadTrackListForAlbum(album.id);
    }
    ngOnInit() { }
}
AlbumSearchComponent.ɵfac = function AlbumSearchComponent_Factory(t) { return new (t || AlbumSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__.SpotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService)); };
AlbumSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AlbumSearchComponent, selectors: [["app-album-search"]], decls: 8, vars: 2, consts: [[1, "example-form"], ["appearance", "fill", 1, "full-width"], ["type", "text", "aria-label", "Number", "matInput", "", "autocomplete", "off", 3, "formControl", "keyup.enter"], [4, "ngIf"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "routerLink", "click"], ["matLine", ""], [2, "float", "left"], [2, "float", "right"]], template: function AlbumSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "form", 0)(3, "mat-form-field", 1)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Album Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function AlbumSearchComponent_Template_input_keyup_enter_6_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AlbumSearchComponent_mat_card_7_Template, 4, 1, "mat-card", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.albums);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatLine, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent], styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLXNlYXJjaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJhbGJ1bS1zZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"] });


/***/ }),

/***/ 8302:
/*!************************************************************************!*\
  !*** ./src/app/components/search/main-search/main-search.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSearchComponent": () => (/* binding */ MainSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);




const _c0 = function () { return ["album"]; };
const _c1 = function () { return ["playlist"]; };
class MainSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainSearchComponent.ɵfac = function MainSearchComponent_Factory(t) { return new (t || MainSearchComponent)(); };
MainSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSearchComponent, selectors: [["app-main-search"]], decls: 8, vars: 4, consts: [[1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 1, "flex-button", 3, "routerLink"]], template: function MainSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "div", 0)(3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: [".example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2VhcmNoLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6Im1haW4tc2VhcmNoLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 5907:
/*!********************************************************************************!*\
  !*** ./src/app/components/search/playlist-search/playlist-search.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistSearchComponent": () => (/* binding */ PlaylistSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/spotify.service */ 1066);
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/player.service */ 4115);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);










const _c0 = function () { return ["/game"]; };
function PlaylistSearchComponent_mat_card_0_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaylistSearchComponent_mat_card_0_mat_list_item_3_Template_mat_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const playlist_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.startGame(playlist_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const playlist_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](playlist_r2.name);
} }
function PlaylistSearchComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PlaylistSearchComponent_mat_card_0_mat_list_item_3_Template, 4, 3, "mat-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.playlists);
} }
class PlaylistSearchComponent {
    constructor(spotify, player, game) {
        this.spotify = spotify;
        this.player = player;
        this.game = game;
        this.playlists = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
    }
    startGame(playList) {
        this.game.loadTrackListForPlayList(playList.id);
    }
    ngOnInit() {
        this.spotify.loadMyPlaylists().subscribe((result) => {
            console.log(result);
            this.playlists = result.items;
        });
    }
}
PlaylistSearchComponent.ɵfac = function PlaylistSearchComponent_Factory(t) { return new (t || PlaylistSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__.SpotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService)); };
PlaylistSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlaylistSearchComponent, selectors: [["app-playlist-search"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "routerLink", "click"], ["matLine", ""], [2, "float", "right"]], template: function PlaylistSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlaylistSearchComponent_mat_card_0_Template, 4, 1, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playlists);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatLine, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5bGlzdC1zZWFyY2guY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 1066:
/*!*************************************************!*\
  !*** ./src/app/services/api/spotify.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpotifyService": () => (/* binding */ SpotifyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 591);





class SpotifyService {
    constructor(http) {
        this.http = http;
        this.access_token = '';
        this.apiBase = 'https://api.spotify.com/v1';
    }
    albumSearch(searchString) {
        var url = this.apiBase + '/search?q=' + searchString + '&type=album';
        return this.apiCall(url);
    }
    loadMyPlaylists() {
        var url = this.apiBase + '/me/playlists';
        return this.apiCall(url);
    }
    getAlbum(albumId) {
        var url = this.apiBase + '/albums/' + albumId;
        return this.apiCall(url);
    }
    getPlaylist(playlistId) {
        var url = this.apiBase + '/playlists/' + playlistId;
        return this.apiCall(url);
    }
    apiCall(url) {
        if (!this.headers) {
            this.login();
            return rxjs__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
        }
        else {
            return this.http.get(url, { 'headers': this.headers });
        }
    }
    playTrack(uri, device_id, position) {
        var playUrl = 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id;
        var body = JSON.stringify({ uris: [uri], position_ms: position });
        return this.http.put(playUrl, body, { 'headers': this.headers });
    }
    playContext(context_uri, device_id) {
        var url = 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id;
        var body = JSON.stringify({ context_uri: context_uri });
        this.http.put(url, body, { 'headers': this.headers }).subscribe();
    }
    login() {
        var client_id = '1ec6cb1a181e47368d762606d2851929'; // Your client id
        var redirect_uri = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)() ? 'http://localhost:8888/callback' : 'https://dinolange.github.io/spotify-project/callback'; // Your redirect uri
        // var state = generateRandomString(16);
        // localStorage.setItem(stateKey, state);
        var scope = 'streaming user-read-private user-read-email';
        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        // url += '&state=' + encodeURIComponent(state);
        location.href = url;
    }
    setAccessToken(access_token) {
        this.access_token = access_token;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + access_token);
    }
    getToken() {
        if (!this.access_token) {
            this.login();
            return '';
        }
        else {
            return this.access_token;
        }
    }
}
SpotifyService.ɵfac = function SpotifyService_Factory(t) { return new (t || SpotifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SpotifyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SpotifyService, factory: SpotifyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1397:
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_spotify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/spotify.service */ 1066);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.service */ 4115);




class GameService {
    constructor(spotify, player) {
        this.spotify = spotify;
        this.player = player;
        this.tracks = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.tracks$ = this.tracks.asObservable();
        this.listName = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
        this.listName$ = this.listName.asObservable();
        this.position = 0;
        this.duration = 1;
        this.guessedCorrect = false;
    }
    loadTrackListForAlbum(id) {
        this.spotify.getAlbum(id).subscribe((result) => {
            // limited to 50 tracks             
            this.tracks.next(result.tracks.items);
            this.listName.next(result.name);
        });
    }
    loadTrackListForPlayList(id) {
        this.spotify.getPlaylist(id).subscribe((result) => {
            console.log('getPlaylist', result);
            // limited to 50 tracks             
            var items = result.tracks.items;
            this.tracks.next(items.map(function (item) {
                return item.track;
            }));
            this.listName.next(result.name);
        });
    }
    chooseRandomSong() {
        var tracks = this.tracks.getValue();
        this.duration = 1;
        this.currentTrack = tracks[Math.floor(Math.random() * tracks.length)];
    }
    playSong() {
        this.position = Math.floor(Math.random() * this.currentTrack.duration_ms);
        if (this.currentTrack) {
            this.player.initTrack(this.currentTrack.uri);
            setTimeout(() => {
                this.playSongAgain();
            }, 1000);
        }
    }
    playSongAgain() {
        if (this.currentTrack) {
            this.player.playCurrentTrack(this.position, this.duration);
        }
    }
    skip() {
        this.position = Math.floor(Math.random() * this.currentTrack.duration_ms);
        this.duration += 1;
        if (this.currentTrack) {
            this.player.playCurrentTrack(this.position, this.duration);
        }
    }
    correctGuess() {
        this.guessedCorrect = true;
    }
    incorrectGuess() {
        this.guessedCorrect = false;
        this.skip();
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__.SpotifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService)); };
GameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4115:
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerService": () => (/* binding */ PlayerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_spotify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/spotify.service */ 1066);



class PlayerService {
    constructor(spotify) {
        this.spotify = spotify;
        this.currentTrack = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.currentTrack$ = this.currentTrack.asObservable();
        this.position = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.position$ = this.position.asObservable();
        this.paused = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.paused$ = this.paused.asObservable();
        this.forcePause = false;
        this.forcePauseCounter = 0;
        this.lastPaused = true;
    }
    initTrack(uri) {
        this.forcePause = true;
        this.spotify.playTrack(uri, this.device_id, 0).subscribe(() => { });
    }
    playCurrentTrack(position, duration) {
        this.player.seek(position);
        this.player.resume();
        setTimeout(() => {
            this.player.pause();
        }, duration * 1000);
    }
    playAlbum(uri) {
        this.spotify.playContext(uri, this.device_id);
    }
    initSpotifyWebPlayer(token) {
        this.player = new Spotify.Player({
            name: 'Spordlfy',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });
        // Ready
        this.player.addListener('ready', ({ device_id }) => {
            this.device_id = device_id;
            console.log('Ready with Device ID', device_id);
        });
        // Not Ready
        this.player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });
        this.player.addListener('initialization_error', ({ message }) => {
            console.error(message);
        });
        this.player.addListener('authentication_error', ({ message }) => {
            console.error(message);
        });
        this.player.addListener('account_error', ({ message }) => {
            console.error(message);
        });
        this.player.getCurrentState().then(state => {
            if (!state) {
                console.error('User is not playing music through the Web Playback SDK');
                return;
            }
            var current_track = state.track_window.current_track;
            this.currentTrack.next(current_track);
            var next_track = state.track_window.next_tracks[0];
        });
        this.player.addListener('player_state_changed', ({ track_window: { current_track }, position }) => {
            this.currentTrack.next(current_track);
            this.position.next(position);
        });
        this.player.addListener('player_state_changed', ({ paused }) => {
            this.paused.next(paused);
            if (this.forcePause && !paused) {
                this.player.pause();
            }
            if (paused && !this.lastPaused) {
                this.forcePause = false;
            }
            this.lastPaused = paused;
        });
    }
    connect() {
        this.player.connect();
    }
    disconnect() {
        this.player.disconnect();
    }
    togglePlay() {
        this.player.togglePlay();
    }
    nextTrack() {
        this.player.nextTrack();
    }
    previousTrack() {
        this.player.previousTrack();
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_spotify_service__WEBPACK_IMPORTED_MODULE_0__.SpotifyService)); };
PlayerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map