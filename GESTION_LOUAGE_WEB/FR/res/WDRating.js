/*! 22.0.2.0 */
/*! VersionVI: 30F230031j x */
function WDPotentiometreBase(){arguments.length&&WDChampParametresHote.prototype.constructor.apply(this,arguments)}function WDRating(){arguments.length&&WDPotentiometreBase.prototype.constructor.apply(this,arguments)}function WDPotentiometre(){arguments.length&&WDPotentiometreBase.prototype.constructor.apply(this,arguments)}function WDRangeSlider(){arguments.length&&WDPotentiometre.prototype.constructor.apply(this,arguments)}var WDDragPotentiometreBase=function(){"use strict";function n(n){arguments.length&&(WDDrag.prototype.constructor.apply(this,[0,50]),this.m_oChamp=n)}return n.prototype=new WDDrag,n.prototype.constructor=n,n.prototype.InitElement=function(n,t,i){var r=this;n.m_fMouseDown=function(n){return r.bOnMouseDown(n||event,i)?r._bStopPropagation(n):!0};this._AttacheDetacheMouseDown(!0,t,n.m_fMouseDown)},n.prototype.LibereElement=function(n,t){this._AttacheDetacheMouseDown(!1,t,n.m_fMouseDown);n.m_fMouseDown=null;delete n.m_fMouseDown},n.prototype._vbOnMouseDown=function(n,t){return WDDrag.prototype._vbOnMouseDown.apply(this,arguments)?this.m_oChamp.bLectureSeuleOuGriseExterne(t)?!1:(this.m_nIndiceZR=t,this.__MAJAfficheComplet(n),!0):!1},n.prototype._vOnMouseMove=function(n){(WDDrag.prototype._vOnMouseMove.apply(this,arguments),this.m_oChamp.bLectureSeuleOuGriseExterne(this.m_nIndiceZR))||this.__MAJAfficheComplet(n)},n.prototype._vOnMouseUp=function(n){try{this.m_oChamp.bLectureSeuleOuGriseExterne(this.m_nIndiceZR)||this.m_oChamp.OnChange(n,this._vtabGetValeursSelection(n),this.m_nIndiceZR)}finally{WDDrag.prototype._vOnMouseUp.apply(this,arguments);this.m_nIndiceZR!==undefined&&delete this.m_nIndiceZR}},n.prototype.__MAJAfficheComplet=function(n){var t=this._vtabGetValeursSelection(n);this.m_oChamp.MAJAfficheComplet(this.m_nIndiceZR,t);this.m_oChamp._OnPCodeChangementSimple(n,this.m_nIndiceZR,t)},n}(),WDDragRating=function(){"use strict";function n(){arguments.length&&WDDragPotentiometreBase.prototype.constructor.apply(this,arguments)}return n.prototype=new WDDragPotentiometreBase,n.prototype.constructor=n,n.prototype._vtabGetValeursSelection=function(n){return[this.__dGetValeursSelection(n),undefined]},n.prototype.__dGetValeursSelection=function(n){var c=this._nGetPosXEvent(n),t=this.m_oChamp.tabGetDescriptions(this.m_nIndiceZR),u=this.m_oChamp.m_oParametres.m_oTailleUneEtoile.m_nX,h,r,o,i,s,f,e;for(t[0]&&t[0].m_oDiv&&(h=t[0].m_oDiv.offsetWidth,0<h&&(u=Math.min(u,t[0].m_oDiv.offsetWidth))),o=t.length/2,r=0;r<o;r++){if(i=clWDUtil.bRTL?o-r-1:r,s=t[i*2].m_oDiv,clWDUtil.bRTL&&clWDUtil.bEstDisplay(t[i*2+1].m_oDiv,document)&&(s=t[i*2+1].m_oDiv),f=c-s.getBoundingClientRect().left,f<0)return clWDUtil.bRTL?i+1:i;if(f<u)return e=f/u,clWDUtil.bRTL&&(e=1-e),i+e}return clWDUtil.bRTL?0:this.m_oChamp.m_oParametres.m_nNbEtoileMax},n}(),WDDragPotentiometre=function(){"use strict";function n(){arguments.length&&WDDragPotentiometreBase.prototype.constructor.apply(this,arguments)}return n.prototype=new WDDragPotentiometreBase,n.prototype.constructor=n,n.prototype._vbOnMouseDown=function(n){var t=this._oGetOriginalTarget(n);return(t&&clWDUtil.bBaliseEstTag(t,"a")&&(this.m_oCurseur=t,this.m_nCurseurOffsetM=-this.m_oChamp.nGetDimensionPrincipale(this.m_oCurseur)/2+this.oGetOffsetElement(n,this.m_oChamp.m_oParametres.m_bVertical)),!WDDragPotentiometreBase.prototype._vbOnMouseDown.apply(this,arguments))?(delete this.m_nCurseur,delete this.m_nCurseurOffsetM,delete this.m_oCurseur,!1):!0},n.prototype._vOnMouseUp=function(){WDDragPotentiometreBase.prototype._vOnMouseUp.apply(this,arguments);delete this.m_nCurseur;delete this.m_nCurseurOffsetM;delete this.m_oCurseur},n.prototype._dGetValeursSelection=function(n){var i=this.m_oChamp.nGetDimensionPrincipaleExtensionFond(),r=this.m_oChamp.nGetDimensionPrincipale(this.m_oChamp.m_oHote)-i,u=this.oGetOffsetElementAutre(n,this.m_oChamp.m_oHote,this.m_oChamp.m_oParametres.m_bVertical)-this.m_nCurseurOffsetM,t=Math.min(Math.max(0,u-i/2),r)/r;return this.m_oChamp.m_oParametres.m_bVertical&&(t=1-t),this.m_oChamp.vdGetBorneInferieure()+(this.m_oChamp.vdGetBorneSuperieure()-this.m_oChamp.vdGetBorneInferieure())*t},n.prototype._vtabGetValeursSelection=function(n){return this.m_oCurseur||(this.m_nCurseurOffsetM=0,this.m_oCurseur=this.m_oChamp.oGetCurseur(0)),[this._dGetValeursSelection(n),undefined]},n}(),WDDragRangeSlider=function(){"use strict";function n(){arguments.length&&WDDragPotentiometre.prototype.constructor.apply(this,arguments)}return n.prototype=new WDDragPotentiometre,n.prototype.constructor=n,n.prototype.__nGetCurseur=function(n,t){return n<=t[0]?0:n>=t[1]?1:n-t[0]<=t[1]-n?0:1},n.prototype._vtabGetValeursSelection=function(n){this.m_oCurseur||(this.m_nCurseurOffsetM=0);var i=this._dGetValeursSelection(n),t=this.m_oChamp.tabGetValeurs(this.m_nIndiceZR);if(this.m_oCurseur)if(undefined===this.m_nCurseur){if(this.m_nCurseur=this.m_oCurseur!=this.m_oChamp.oGetCurseur(0)?1:0,t[0]==t[1]){switch(t[0]){case this.m_oChamp.vdGetBorneInferieure():this.m_nCurseur=1;break;case this.m_oChamp.vdGetBorneSuperieure():this.m_nCurseur=0;break;default:this.m_nCurseur=i<t[0]?0:1}this.m_oCurseur=this.m_oChamp.oGetCurseur(this.m_nCurseur)}}else switch(this.m_nCurseur){case 0:i=Math.min(i,t[1]);break;case 1:i=Math.max(t[0],i)}else this.m_nCurseur=this.__nGetCurseur(i,t),this.m_oCurseur=this.m_oChamp.oGetCurseur(this.m_nCurseur);return t[this.m_nCurseur]=i,t},n}();WDPotentiometreBase.prototype=new WDChampParametresHote;WDPotentiometreBase.prototype.constructor=WDPotentiometreBase;WDPotentiometreBase.prototype.Init=function(){WDChampParametresHote.prototype.Init.apply(this,arguments);this.m_clDrag=new this.vDrag(this);this.__tabInitTousElements()};WDPotentiometreBase.prototype._vAppliqueParametres=function(){WDChampParametresHote.prototype._vAppliqueParametres.apply(this,arguments);this._vSetValeur(this.vtabGetValeurs(),undefined,!0)};WDPotentiometreBase.prototype.__tabInitTousElements=function(){this.bGestionTableZR()?this.oGetTableZRParent()?this.m_tabDescriptions=[]:(this.m_tabDescriptions=[],this.PourToutesLignesTableZR(this.__InitElementsZR)):(this.m_tabDescriptions=this.__tabInitElements(this.m_oHote),this.MAJAfficheComplet())};WDPotentiometreBase.prototype.__InitElementsZR=function(n){this.m_tabDescriptions[n-1]=this.__tabInitElements(this.oGetElementByIdZRIndice(document,n,this.ms_sSuffixeHote),n);this.MAJAfficheComplet(n)};WDPotentiometreBase.prototype.__tabInitElements=function(n,t){var u,f,i,e,r;if(n)for(u=[],f=this._vtabGetElements(n),e=f.length,i=0;i<e;i++)r={m_oDiv:f[i]},u.push(r),this.m_clDrag.InitElement(r,r.m_oDiv,t);return u};WDPotentiometreBase.prototype.__LibereTousElements=function(){for(var t=this.m_tabDescriptions.length,n=0;n<t;n++)this.__LibereElements(this.m_tabDescriptions[n]);this.m_tabDescriptions=[]};WDPotentiometreBase.prototype.__LibereElementsZR=function(n,t){var i=n-1;this.m_tabDescriptions[i]&&(this.__LibereElements(this.m_tabDescriptions[i]),t&&delete this.m_tabDescriptions[i])};WDPotentiometreBase.prototype.__LibereElements=function(n){for(var r=n.length,i,t=0;t<r;t++)i=n[t],this.m_clDrag.LibereElement(i,i.m_oDiv),i.m_oDiv=null,delete i.m_oDiv,n[t]=null;n=[]};WDPotentiometreBase.prototype.GetValeur=function(n,t,i){return t=this.bGestionTableZR()?this._vParseValeur(t):this.m_oDonnees.m_dValeur,WDChampParametresHote.prototype.GetValeur.apply(this,[n,t,i])};WDPotentiometreBase.prototype.SetValeur=function(n,t){return WDChampParametresHote.prototype.SetValeur.apply(this,arguments),this.__SetValeur(this._vParseValeur(t),undefined,!0),this.m_oDonnees.m_dValeur};WDPotentiometreBase.prototype.GetProp=function(n){switch(n){case this.XML_CHAMP_PROP_NUM_BORNEMIN:return this.vdGetBorneInferieure();case this.XML_CHAMP_PROP_NUM_BORNEMAX:return this.vdGetBorneSuperieure();default:return WDChampParametresHote.prototype.GetProp.apply(this,arguments)}};WDPotentiometreBase.prototype.SetProp=function(n,t,i){i=WDChampParametresHote.prototype.SetProp.apply(this,arguments);switch(n){case this.XML_CHAMP_PROP_NUM_BORNEMIN:return this.__xoSetBorneMinMax(i,!1);case this.XML_CHAMP_PROP_NUM_BORNEMAX:return this.__xoSetBorneMinMax(i,!0);default:return i}};WDPotentiometreBase.prototype.__xoSetBorneMinMax=function(n,t){n=parseInt(n,10);var i=this.vdGetBorneInferieure(),r=this.vdGetBorneSuperieure();if(t?r=n:i=n,r<i)throw new WDErreur(700,i,r);return n=this.__xvoSetBorneMinMax(n,t),this._vAppliqueParametres(),n};WDPotentiometreBase.prototype._vSetValeur=function(n,t,i){this.__SetValeur(n[0],t,i)};WDPotentiometreBase.prototype.__SetValeur=function(n,t,i){isNaN(n)||(n=this._dGetValeurDansBornes(n),this.m_oDonnees.m_dValeur=n,this._vSetValeurChampFormulaire(n),i&&this.__MAJAfficheCompletZR(t))};WDPotentiometreBase.prototype._dGetValeurDansBornes=function(n){return Math.min(Math.max(n,this.vdGetBorneInferieure()),this.vdGetBorneSuperieure())};WDPotentiometreBase.prototype.tabGetValeurs=function(n){return this.oAppelSurLigneTableZR(n,this.vtabGetValeurs,[])};WDPotentiometreBase.prototype.OnChange=function(n,t,i){var r=this.tabGetValeurs(i);(this.__ArrondiSelection(t,r),this.bGestionTableZR()&&i!==undefined&&this.SetTableZRValeur(n,i),t[0]!=r[0]||t[1]!=r[1])&&(this._vSetValeur(t,i,!0),this.RecuperePCode(this.ms_nEventNavChange)(n),this._OnChampModifie(n,t[0]))};WDPotentiometreBase.prototype._OnPCodeChangementSimple=function(n,t,i){this.bGestionTableZR()&&t!==undefined&&this.SetTableZRValeur(n,t);var r=this.vtabGetValeurs();this._vSetValeur(i,t,!1);this.RecuperePCode(this.ms_nEventNavModifSimple)(n);this._vSetValeur(r,t,!1)};WDPotentiometreBase.prototype.__ArrondiSelection=function(n,t){for(var r=n.length,i=0;i<r;i++)undefined!=n[i]&&(n[i]=this._vdArrondiSelection(n[i],t[i]))};WDPotentiometreBase.prototype.vtabGetValeurs=function(){var n;return this.bGestionTableZR()?(this._vLiaisonHTML(),this.m_oChampFormulaire&&(n=this._vParseValeur(this.m_oChampFormulaire.value))):n=this.m_oDonnees.m_dValeur,[n,undefined]};WDPotentiometreBase.prototype._vOnTableZRAfficheAJAXInterne=function(){WDChampParametresHote.prototype._vOnTableZRAfficheAJAXInterne.apply(this,arguments);this.__tabInitTousElements()};WDPotentiometreBase.prototype._vOnLigneTableZRAffiche=function(n){WDChampParametresHote.prototype._vOnLigneTableZRAffiche.apply(this,arguments);this.__LibereElementsZR(n,!1);this.__InitElementsZR(n)};WDPotentiometreBase.prototype._vOnLigneTableZRMasque=function(n){this.__LibereElementsZR(n,!0);WDChampParametresHote.prototype._vOnLigneTableZRMasque.apply(this,arguments)};WDPotentiometreBase.prototype.MAJAfficheComplet=function(n){this.oAppelSurLigneTableZR(n,this.__MAJAfficheCompletZR,arguments)};WDPotentiometreBase.prototype.__MAJAfficheCompletZR=function(n,t){this._vMAJAfficheCompletInterne(this.vtabGetValeurs(),n,t)};WDPotentiometreBase.prototype.tabGetDescriptions=function(n){return this.bGestionTableZR()?(n===undefined&&(n=this.nGetTableZRValeur()),this.m_tabDescriptions[n-1]):this.m_tabDescriptions};WDRating.prototype=new WDPotentiometreBase;WDRating.prototype.constructor=WDRating;WDRating.prototype.ms_eRateEntier=0;WDRating.prototype.ms_eRateDemi=1;WDRating.prototype.ms_eRateReel=2;WDRating.prototype.ms_eEtoileSans=-1;WDRating.prototype.ms_eEtoilePleine=0;WDRating.prototype.ms_eEtoileVide=1;WDRating.prototype.ms_eEtoileSelection=2;WDRating.prototype.ms_eEtoileGrise=3;WDRating.prototype.vDrag=WDDragRating;WDRating.prototype._vParseValeur=parseFloat;WDRating.prototype._vtabGetElements=function(n){var t=n.getElementsByTagName("li");return clWDUtil.bForEach(t,function(n){return"none"==n.style.display&&clWDUtil.ActiveDesactiveClassName(n,"wbRatingDisplay",!0),"none"==n.style.backgroundImage&&clWDUtil.ActiveDesactiveClassName(n,"wbRatingBackgroundImage",!0),!0}),t};WDRating.prototype.vdGetBorneInferieure=function(){return this.m_oParametres.m_nNbEtoileMin};WDRating.prototype.vdGetBorneSuperieure=function(){return this.m_oParametres.m_nNbEtoileMax};WDRating.prototype._vdArrondiSelection=function(n,t){switch(this.m_oParametres.m_eGranulariteValeur){case this.ms_eRateEntier:return Math.ceil(n);case this.ms_eRateDemi:if(n<t||n>t)return Math.ceil(n*2)/2;break;case this.ms_eRateReel:return n}};WDRating.prototype._vMAJAfficheCompletInterne=function(n,t,i){var f=n[0],u,e,o,r,c,s,h;if(i&&(u=i[0]),e=this.tabGetDescriptions(t),e&&f!==undefined)for(clWDUtil.bHTMLVideDepuisVariable(this,"m_oDivTertiaire"),clWDUtil.bForEach(e,function(n){var t=n.m_oDiv;return clWDUtil.bAvecClasse(t,"wbRatingDisplay")&&(t.style.display="none"),clWDUtil.bAvecClasse(t,"wbRatingBackgroundImage")&&(t.style.backgroundImage="none"),!0}),o=this.oAppelSurLigneTableZR(t,this._bGrise,[],!0),c=this.m_oParametres.m_nNbEtoileMax,r=0;r<c;r++)h=!1,u!==undefined&&(u=this._vdArrondiSelection(u,f),s=u<f?Math.floor(u)<=r&&r<f:u>f?Math.floor(u)>r&&r>=Math.floor(f):!1,f>r&&f<r+1&&u>r&&u<r+1&&(h=!0)),this.__AfficheUnDivPrincipal(e,r,f,s,u,o),this.__AfficheUnDivSecondaire(e,r,f,s,u,o),h&&this.__AfficheUnDivTertiaire(e,r,f,s,u,o)};WDRating.prototype.__AfficheUnDivPrincipal=function(n,t,i,r,u,f){var e,o;u!==undefined&&this.ms_eRateEntier!=this.m_oParametres.m_eGranulariteValeur&&u>t&&u<t+1?i>t&&i<t+1?(o=this.ms_eEtoilePleine,e=Math.min(i,u)-t):(e=u-t,o=u>i?this.ms_eEtoileSelection:this.ms_eEtoilePleine):this.ms_eRateEntier!=this.m_oParametres.m_eGranulariteValeur&&i>t&&i<t+1?(e=i-t,o=r&&u<i?this.ms_eEtoileSelection:this.ms_eEtoilePleine):(e=1,o=r?this.ms_eEtoileSelection:i>t+1?this.m_oParametres.m_bDessinValeurPrevAvec0?this.ms_eEtoileVide:this.ms_eEtoilePleine:i==t+1?this.ms_eEtoilePleine:this.ms_eEtoileVide);this.__AfficheUnDiv(n,t,!1,e,o,i,f)};WDRating.prototype.__AfficheUnDivSecondaire=function(n,t,i,r,u,f){var e,o,s;this.ms_eRateEntier!=this.m_oParametres.m_eGranulariteValeur&&(u!==undefined&&u>t&&u<t+1?(e=!0,i>t&&i<t+1?(o=this.ms_eEtoileVide,i=Math.max(i,u)):(o=u>i?this.ms_eEtoileVide:this.ms_eEtoileSelection,i=u)):i>t&&i<t+1?(e=!0,o=r&&u>i?this.ms_eEtoileSelection:this.ms_eEtoileVide):e=!1,e&&(s=1-(i-t),this.__AfficheUnDiv(n,t,!0,s,o,i,f)),clWDUtil.SetDisplay(n[t*2+1].m_oDiv,e))};WDRating.prototype.__AfficheUnDivTertiaire=function(n,t,i,r,u,f){var e=n[t*2+1].m_oDiv,s,o;this.m_oDivTertiaire=e.parentNode.insertBefore(e.cloneNode(),e);s=Math.abs(i-u);o=Math.min(i,u)-t;clWDUtil.bRTL&&(o=1-(Math.max(i,u)-t));this.__AfficheUnDivInterne(this.m_oDivTertiaire,t,s,o,this.ms_eEtoileSelection,u,f,!1)};WDRating.prototype.__AfficheUnDiv=function(n,t,i,r,u,f,e){var o=0;r!=1&&(clWDUtil.bRTL&&!i||!clWDUtil.bRTL&&i)&&(o=1-r);this.__AfficheUnDivInterne(n[t*2+(i?1:0)].m_oDiv,t,r,o,u,f,e,i)};WDRating.prototype.__AfficheUnDivInterne=function(n,t,i,r,u,f,e,o){var s,a,l,v,y,h,c;if(u=this.__eCorrigeEtat(u,e),bIEQuirks&&o&&i==.5&&1==this.m_oParametres.m_oTailleUneEtoile.m_nX%2&&(i=.499),s=u+r,this.m_oParametres.m_bUnePlancheParValeur&&(s+=t*this.m_oParametres.m_nNbEtatsImageEtoile),!bIEQuirks&&(!bIE||nIE>8)){if(this.m_oParametres.m_bUnePlancheParValeur){a=this.m_oParametres.m_nNbEtatsImageEtoile*this.m_oParametres.m_nNbEtoileMax;var l=this.m_oParametres.m_oTailleUneEtoile.m_nX*this.m_oParametres.m_nNbEtatsImageEtoile*this.m_oParametres.m_nNbEtoileMax,p=l-this.m_oParametres.m_oTailleUneEtoile.m_nX,w=s*this.m_oParametres.m_oTailleUneEtoile.m_nX;s=100*w/p}else s*=this.m_oParametres.m_oTailleUneEtoile.m_nX,s/=this.m_oParametres.m_oTailleUneEtoile.m_nX*Math.max(1,this.m_oParametres.m_nNbEtatsImageEtoile-1),s*=100,a=this.m_oParametres.m_nNbEtatsImageEtoile,l=this.m_oParametres.m_oTailleUneEtoile.m_nX*this.m_oParametres.m_nNbEtatsImageEtoile;i<1&&(a/=i,v=l-this.m_oParametres.m_oTailleUneEtoile.m_nX,y=l-this.m_oParametres.m_oTailleUneEtoile.m_nX*i,s=s*v/y);n.style.backgroundSize=100*a+"% auto";s=s+"%"}else s*=this.m_oParametres.m_oTailleUneEtoile.m_nX,s="-"+s.toFixed(0)+"px";if(n.style.width=parseInt(i*100,10)+"%",u!=this.ms_eEtoileSans?(n.style.backgroundPosition=s+" center",n.style.backgroundImage=""):n.style.backgroundImage="none",this.m_oDonnees.m_tabBulles&&t<this.m_oDonnees.m_tabBulles.length&&(h=this.m_oDonnees.m_tabBulles[t].m_sBulle),!h||h.length==0){switch(this.m_oParametres.m_eGranulariteValeur){case this.ms_eRateEntier:c=f.toFixed(0);break;case this.ms_eRateDemi:c=f.toFixed(1);break;case this.ms_eRateReel:c=f.toFixed(2)}h=e?c+"/"+this.m_oParametres.m_nNbEtoileMax:(i!=1?c:t+1)+"/"+this.m_oParametres.m_nNbEtoileMax}n.title=h};WDRating.prototype.__eCorrigeEtat=function(n,t){var i;switch(n){default:case this.ms_eEtoilePleine:t&&(n=this.ms_eEtoileGrise);i=this.ms_eEtoilePleine;break;case this.ms_eEtoileVide:i=this.ms_eEtoileSans;break;case this.ms_eEtoileSelection:i=this.ms_eEtoilePleine}return n<this.m_oParametres.m_nNbEtatsImageEtoile?n:i};WDRating.prototype.__xvoSetBorneMinMax=function(n,t){var i,r;if(t?(i=2,r=100):(i=0,r=1),n<i||r<n)throw new WDErreur(301,n,i,r);return t?this.m_oParametres.m_nNbEtoileMax=n:this.m_oParametres.m_nNbEtoileMin=n,n};WDPotentiometre.prototype=new WDPotentiometreBase;WDPotentiometre.prototype.constructor=WDPotentiometre;WDPotentiometre.prototype.ms_eSelectionRien=0;WDPotentiometre.prototype.ms_eSelectionDebut=1;WDPotentiometre.prototype.ms_eSelectionFin=2;WDPotentiometre.prototype.ms_eSelectionEntreCurseur=3;WDPotentiometre.prototype.vDrag=WDDragPotentiometre;WDPotentiometre.prototype._vParseValeur=parseInt;WDPotentiometre.prototype.Init=function(){this.__SetOrientation();WDPotentiometreBase.prototype.Init.apply(this,arguments)};WDPotentiometre.prototype._vAppliqueParametres=function(){WDPotentiometreBase.prototype._vAppliqueParametres.apply(this,arguments);this.__SetOrientation()};WDPotentiometre.prototype.__SetOrientation=function(){this.m_oParametres.m_bVertical?(this.nGetDimensionPrincipale=this._nGetOffsetHeight,this.sGetDimensionPrincipaleStyle=function(n){return n.style.height},this.SetDimensionPrincipaleStyle=this.s_SetStyleHeight,this.SetPositionPrincipaleStyle=this.s_SetStyleBottom):(this.nGetDimensionPrincipale=this._nGetOffsetWidth,this.sGetDimensionPrincipaleStyle=function(n){return n.style.width},this.SetDimensionPrincipaleStyle=this.s_SetStyleWidth,this.SetPositionPrincipaleStyle=this.s_SetStyleLeft)};WDPotentiometre.prototype._vtabGetElements=function(n){return[n]};WDPotentiometre.prototype.vdGetBorneInferieure=function(){return this.m_oDonnees.m_nBorneInferieure};WDPotentiometre.prototype.vdGetBorneSuperieure=function(){return this.m_oDonnees.m_nBorneSuperieure};WDPotentiometre.prototype._vdArrondiSelection=function(n){return Math.ceil(n)};WDPotentiometre.prototype._vMAJAfficheCompletInterne=function(n,t,i){var f,h;i!==undefined&&(this.__ArrondiSelection(i,n),n=i);var o=this._dGetValeurDansBornes(n[0]),s=this._dGetValeurDansBornes(n[1]),u,r,e=(o-this.vdGetBorneInferieure())/(this.vdGetBorneSuperieure()-this.vdGetBorneInferieure());switch(this.m_oParametres.m_eSelection){case this.ms_eSelectionRien:u=e;isNaN(s)||(r=(s-o)/(this.vdGetBorneSuperieure()-this.vdGetBorneInferieure()));break;case this.ms_eSelectionDebut:r=e;break;case this.ms_eSelectionFin:u=e;r=1-e;break;case this.ms_eSelectionEntreCurseur:u=e;r=(s-o)/(this.vdGetBorneSuperieure()-this.vdGetBorneInferieure())}f=clWDUtil.oGetElementByTagAndClass(this.m_oHote,"div","valeur");undefined!==u&&this.SetPositionPrincipaleStyle(f,100*u+"%");undefined!==r&&(this.SetDimensionPrincipaleStyle(f,100*r+"%"),undefined===u&&(h=parseInt(clWDUtil.oGetCurrentStyle(f).paddingLeft,10),0<h&&(clWDUtil.oGetElementByTagAndClass(f,"a","principal").style.right=-Math.min(this.m_oHote.offsetWidth*r,(1-r)*h)+"px")),this.__MasqueDiv3ImagesSiBesoin(f,r))};WDPotentiometre.prototype.__MasqueDiv3ImagesSiBesoin=function(n,t){var f="div",s=0,u,o;this.m_oParametres.m_bVertical&&(f="tr",s=1,bIEQuirks9Max&&clWDUtil.SetDisplay(n.firstChild,t>0));var i=clWDUtil.oGetElementByTagAndClass(n,f,"gauche"),r=clWDUtil.oGetElementByTagAndClass(n,f,"droite"),e=clWDUtil.oGetElementByTagAndClass(n,f,"repeat");if(i&&r&&e&&(this.__SupprimeDimensionPrincipaleStyle(i),this.__SupprimeDimensionPrincipaleStyle(r),this.nGetDimensionPrincipale(e)<=s&&clWDUtil.bEstDisplay(e,document))){u=this.nGetDimensionPrincipale(n);switch(this.m_oParametres.m_eSelection){case this.ms_eSelectionDebut:this.SetDimensionPrincipaleStyle(r,Math.max(0,u-this.nGetDimensionPrincipale(i)));break;case this.ms_eSelectionFin:this.SetDimensionPrincipaleStyle(i,Math.max(0,u-this.nGetDimensionPrincipale(r)));break;case this.ms_eSelectionEntreCurseur:o=Math.floor(u/2);this.SetDimensionPrincipaleStyle(i,o);this.SetDimensionPrincipaleStyle(r,u-o)}}};WDPotentiometre.prototype.__SupprimeDimensionPrincipaleStyle=function(n){""!=this.sGetDimensionPrincipaleStyle(n)&&this.SetDimensionPrincipaleStyle(n,"")};WDPotentiometre.prototype.__xvoSetBorneMinMax=function(n,t){return t?this.m_oDonnees.m_nBorneSuperieure=n:this.m_oDonnees.m_nBorneInferieure=n};WDPotentiometre.prototype.nGetDimensionPrincipaleExtensionFond=function(){return this.m_oParametres.m_bExtensionFond?this._nGetDimensionPrincipaleCurseurMax():0};WDPotentiometre.prototype._nGetDimensionPrincipaleCurseurMax=function(){for(var i=this.m_oHote.getElementsByTagName("a"),r=i.length,t=0,n=0;n<r;n++)t=Math.max(this.nGetDimensionPrincipale(i[n]),t);return t};WDPotentiometre.prototype.oGetCurseur=function(n){return this.m_oHote.getElementsByTagName("a")[n]};WDRangeSlider.prototype=new WDPotentiometre;WDRangeSlider.prototype.constructor=WDRangeSlider;WDRangeSlider.prototype.GetValeur=function(n,t,i){return this.GetProp(this.XML_CHAMP_PROP_NUM_VALEURINFERIEURE,n,t,i)};WDRangeSlider.prototype.SetValeur=function(n,t,i){return this.SetProp(this.XML_CHAMP_PROP_NUM_VALEURINFERIEURE,n,t,i)};WDRangeSlider.prototype.GetProp=function(n,t,i){switch(n){case this.XML_CHAMP_PROP_NUM_VALEURINFERIEURE:return this.__GetValeurChampFormulaireUneValeur(i,!1);case this.XML_CHAMP_PROP_NUM_VALEURSUPERIEURE:return this.__GetValeurChampFormulaireUneValeur(i,!0);default:return WDPotentiometre.prototype.GetProp.apply(this,arguments)}};WDRangeSlider.prototype.SetProp=function(n,t,i,r){var f,u;i=WDPotentiometre.prototype.SetProp.apply(this,arguments);try{r&&(f=this.m_oChampFormulaire,this.m_oChampFormulaire=r);switch(n){case this.XML_CHAMP_PROP_NUM_VALEURINFERIEURE:return u=[this._vParseValeur(i),this.__GetValeurChampFormulaireUneValeur(r.value,!0)],u[1]<u[0]&&(u[1]=u[0]),this._vSetValeur(u,undefined,!0),r.value;case this.XML_CHAMP_PROP_NUM_VALEURSUPERIEURE:return u=[this.__GetValeurChampFormulaireUneValeur(r.value,!1),this._vParseValeur(i)],u[1]<u[0]&&(u[0]=u[1]),this._vSetValeur(u,undefined,!0),r.value;default:return i}}finally{undefined!==f&&(this.m_oChampFormulaire=f)}};WDRangeSlider.prototype.vDrag=WDDragRangeSlider;WDRangeSlider.prototype.__SetValeurChampFormulaireUneValeur=function(n,t,i){if(n){var r=n.value.split(",");r[i?1:0]=t;n.value=r.join(",")}};WDRangeSlider.prototype.__GetValeurChampFormulaireUneValeur=function(n,t){return this._vParseValeur(n.split(",")[t?1:0])};WDRangeSlider.prototype._vSetValeurChampFormulaire=function(n){this.__SetValeurChampFormulaireUneValeur(this.m_oChampFormulaire,n,!1)};WDRangeSlider.prototype._vSetValeur=function(n){var t=n[1];isNaN(t)||(t=this._dGetValeurDansBornes(t),this.m_oDonnees.m_dValeurSuperieure=t,this.__SetValeurChampFormulaireUneValeur(this.m_oChampFormulaire,t,!0));WDPotentiometre.prototype._vSetValeur.apply(this,arguments)};WDRangeSlider.prototype.vtabGetValeurs=function(){var n=WDPotentiometre.prototype.vtabGetValeurs.apply(this,arguments);return this.bGestionTableZR()?this.m_oChampFormulaire&&(n[1]=this.__GetValeurChampFormulaireUneValeur(this.m_oChampFormulaire.value,!0)):n[1]=this.m_oDonnees.m_dValeurSuperieure,n}