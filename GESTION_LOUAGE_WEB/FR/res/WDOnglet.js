/*! 23.0.1.0 */
/*! VersionVI: 30F230031j x */
function WDVolet(n,t){var i=n.m_sAliasChamp+"_"+(t+1),r,u;this.m_oTitre=document.getElementById(i);this.m_oCorps=document.getElementById("dww"+i);this.m_oLien=this.m_oTitre.getElementsByTagName("a")[0];this.m_nIndiceVolet=t;this.m_oTitre&&(r=this,u=n,this.m_fOnClick=this.m_oTitre.onclick,this.m_oTitre.onclick=function(n){r.OnClick(n||event,u)})}function WDOnglet(n,t,i,r,u){var f;if(arguments.length){WDChamp.prototype.constructor.apply(this,arguments);var o=u[0],s=u[1],e=u[2];for(this.m_nNbOnglets=o,this.m_tabOnglets=[],this.m_ePosition=s,this.m_tabStyleMasque=e,this.m_tabStyleAffiche=[],f=e.length-1;0<=f;f--)this.m_tabStyleAffiche.push(e[f])}}WDVolet.prototype.OnClick=function(n,t){var r,i,u,f;if(this.m_oLien)if(bIE){if(this.m_oLien.disabled)return}else for(r=this.m_oLien.attributes,u=r.length,i=0;i<u;i++)if(f=r.item(i),f.nodeName.toLowerCase()=="disabled")return;t.OnClick(n,this.m_nIndiceVolet);this.m_fOnClick&&this.m_fOnClick.apply(this.m_oTitre,[n])};WDVolet.prototype.Affiche=function(n,t){var r,i;if(undefined===this.m_bAffiche||n!=this.m_bAffiche){clWDUtil.SetDisplay(this.m_oCorps,n);n&&clWDUtil.m_oNotificationsImagesVisibles.LanceNotifications(this,this.m_oCorps);r=n?t.m_tabStyleAffiche:t.m_tabStyleMasque;clWDUtil.RemplaceClassName(this.m_oTitre,r[0],r[1]);i=n?"0":"1px";switch(t.m_ePosition){case t.ms_ePosVolet_Haut:this.m_oTitre.style.borderBottomWidth=i;break;case t.ms_ePosVolet_Bas:this.m_oTitre.style.borderTopWidth=i;break;case t.ms_ePosVolet_Gauche:this.m_oTitre.style.borderRightWidth=i;break;case t.ms_ePosVolet_Droite:this.m_oTitre.style.borderLeftWidth=i}bIE||(this.m_oTitre.style.borderCollapse=n?"separate":"collapse");AppelMethode(WDChamp.prototype.ms_sOnDisplay,[this.m_oCorps,n]);window.$&&$(window).trigger("trigger.wb.disposition.visible.maj")}};WDVolet.prototype.bActif=function(){return this.m_oLien.disabled?!1:this.m_oLien.readOnly||this.m_oLien.attributes.READONLY?!1:!0};WDVolet.prototype.SetHauteur=function(n){this.m_oCorps.firstChild.firstChild.firstChild.height=n+"px"};WDOnglet.prototype=new WDChamp;WDOnglet.prototype.constructor=WDOnglet;WDOnglet.prototype.ms_ePosVolet_Haut=0;WDOnglet.prototype.ms_ePosVolet_Bas=1;WDOnglet.prototype.ms_ePosVolet_Gauche=2;WDOnglet.prototype.ms_ePosVolet_Droite=3;WDOnglet.prototype.Init=function(){WDChamp.prototype.Init.apply(this,arguments);for(var t=this.m_nNbOnglets,n=0;n<t;n++)this.m_tabOnglets.push(new WDVolet(this,n))};WDOnglet.prototype.OnClick=function(n,t){this.m_tabOnglets[t].bActif()&&this.AfficheVolet(t);this.RecuperePCode(this.ms_nEventNavModifSimple)(n)};WDOnglet.prototype.GetValeur=function(n,t,i){var r=parseInt(t,10);return WDChamp.prototype.GetValeur.apply(this,[n,r,i])};WDOnglet.prototype.SetValeur=function(n,t){WDChamp.prototype.SetValeur.apply(this,arguments);var i=parseInt(t,10);return!isNaN(i)&&i>=1&&this.AfficheVolet(i-1),i};WDOnglet.prototype.GetProp=function(n){switch(n){case this.XML_CHAMP_PROP_NUM_OCCURRENCE:return this.m_nNbOnglets;default:return WDChamp.prototype.GetProp.apply(this,arguments)}};WDOnglet.prototype.AfficheVolet=function(n){for(var i=this.m_nNbOnglets,t=0;t<i;t++)t!=n&&this.m_tabOnglets[t].Affiche(!1,this);this.m_tabOnglets[n].Affiche(!0,this);this._vSetValeurChampFormulaire(n+1)};WDOnglet.prototype.HauteurVolet=function(n){for(var i=this.m_nNbOnglets,t=0;t<i;t++)this.m_tabOnglets[t].SetHauteur(n)};WDOnglet.prototype.OnDisplay=function(n,t){(WDChamp.prototype.OnDisplay.apply(this,arguments),t)&&window.$&&$(window).trigger("wbOngletVisible")};var WDBandeauDefilant=function(){"use strict";function n(){arguments.length&&WDChampParametres.prototype.constructor.apply(this,arguments)}return n.prototype=new WDChampParametres,n.prototype.constructor=n,n.prototype._vLiaisonHTML=function(){WDChampParametres.prototype._vLiaisonHTML.apply(this,arguments);this.m_oChampJQuery=$(_JGE(this.m_sAliasChamp,document))},n.prototype._vAppliqueParametres=function(){WDChampParametres.prototype._vAppliqueParametres.apply(this,arguments);var n=this.m_oChampJQuery;n.wbDefilementSet(this.m_oParametres.m_bDefilementActive);clWDUtil.bForEach(this.m_oDonnees.m_tabPlans,function(t,i){return n.wbPlanVisibleSet(i+1,t.m_bVisible),!0})},n.prototype.SetValeur=function(n,t){return t=WDChampParametres.prototype.SetValeur.apply(this,arguments),this.m_oChampJQuery.wbPlanSet(t)},n.prototype.GetValeur=function(n,t,i){return t=WDChampParametres.prototype.GetValeur.apply(this,arguments),parseInt(i.value,10)},n.prototype.__SetDefilement=function(n){this.m_oParametres.m_bDefilementActive=n;this.m_oChampJQuery.wbDefilementSet(n)},n.prototype.Lance=function(){this.__SetDefilement(!0)},n.prototype.Arrete=function(){this.__SetDefilement(!1)},n.prototype.Premier=function(){this.m_oChampJQuery.wbPlanSet(1,{bBoucle:!0,bSensCorrectionIncrement:!0})},n.prototype.Precedent=function(){this.m_oChampJQuery.wbPlanAvanceRecule(!1,!0)},n.prototype.Suivant=function(){this.m_oChampJQuery.wbPlanAvanceRecule(!0,!0)},n.prototype.Dernier=function(){this.m_oChampJQuery.wbPlanSet(this.m_oChampJQuery.wbPlanOccurrenceGet(),{bBoucle:!0,bSensCorrectionIncrement:!1})},n}()