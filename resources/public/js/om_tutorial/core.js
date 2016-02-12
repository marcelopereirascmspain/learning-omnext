// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
om_tutorial.core.read = (function om_tutorial$core$read(p__20079,key,params){
var map__20083 = p__20079;
var map__20083__$1 = ((((!((map__20083 == null)))?((((map__20083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20083):map__20083);
var env = map__20083__$1;
var state = cljs.core.get.call(null,map__20083__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__20085 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__20085,(0),null);
var value = cljs.core.nth.call(null,vec__20085,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_tutorial.core.mutate = (function om_tutorial$core$mutate(p__20086,key,params){
var map__20089 = p__20086;
var map__20089__$1 = ((((!((map__20089 == null)))?((((map__20089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20089):map__20089);
var env = map__20089__$1;
var state = cljs.core.get.call(null,map__20089__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20089,map__20089__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__20089,map__20089__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
om_tutorial.core.Counter = (function om_tutorial$core$Counter(){
var this__18856__auto__ = this;
React.Component.apply(this__18856__auto__,arguments);

if(!((this__18856__auto__.initLocalState == null))){
this__18856__auto__.state = this__18856__auto__.initLocalState();
} else {
this__18856__auto__.state = {};
}

return this__18856__auto__;
});

om_tutorial.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x20095_20105 = om_tutorial.core.Counter.prototype;
x20095_20105.componentWillUpdate = ((function (x20095_20105){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18796__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18796__auto__);
});})(x20095_20105))
;

x20095_20105.shouldComponentUpdate = ((function (x20095_20105){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18796__auto__),goog.object.get(next_props__18797__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__18796__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18796__auto__.state,"omcljs$state"),goog.object.get(next_state__18798__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x20095_20105))
;

x20095_20105.componentWillUnmount = ((function (x20095_20105){
return (function (){
var this__18796__auto__ = this;
var r__18802__auto__ = om.next.get_reconciler.call(null,this__18796__auto__);
var cfg__18803__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18802__auto__);
var st__18804__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18803__auto__);
var indexer__18801__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18803__auto__);
if((st__18804__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18804__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18796__auto__);
}

if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20095_20105))
;

x20095_20105.componentDidUpdate = ((function (x20095_20105){
return (function (prev_props__18799__auto__,prev_state__18800__auto__){
var this__18796__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18796__auto__);
});})(x20095_20105))
;

x20095_20105.isMounted = ((function (x20095_20105){
return (function (){
var this__18796__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18796__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20095_20105))
;

x20095_20105.componentWillMount = ((function (x20095_20105){
return (function (){
var this__18796__auto__ = this;
var indexer__18801__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18796__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20095_20105))
;

x20095_20105.render = ((function (x20095_20105){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20096 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20097 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20098 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20099 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20100 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20101 = om.next.props.call(null,this$);
var map__20101__$1 = ((((!((map__20101 == null)))?((((map__20101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20101):map__20101);
var count = cljs.core.get.call(null,map__20101__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20101,map__20101__$1,count,_STAR_reconciler_STAR_20096,_STAR_depth_STAR_20097,_STAR_shared_STAR_20098,_STAR_instrument_STAR_20099,_STAR_parent_STAR_20100,this$,x20095_20105){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__20101,map__20101__$1,count,_STAR_reconciler_STAR_20096,_STAR_depth_STAR_20097,_STAR_shared_STAR_20098,_STAR_instrument_STAR_20099,_STAR_parent_STAR_20100,this$,x20095_20105))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20100;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20099;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20098;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20097;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20096;
}});})(x20095_20105))
;


om_tutorial.core.Counter.prototype.constructor = om_tutorial.core.Counter;

om_tutorial.core.Counter.prototype.om$isComponent = true;

var x20103_20106 = om_tutorial.core.Counter;
x20103_20106.om$next$IQuery$ = true;

x20103_20106.om$next$IQuery$query$arity$1 = ((function (x20103_20106){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x20103_20106))
;


var x20104_20107 = om_tutorial.core.Counter.prototype;
x20104_20107.om$next$IQuery$ = true;

x20104_20107.om$next$IQuery$query$arity$1 = ((function (x20104_20107){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x20104_20107))
;


om_tutorial.core.Counter.cljs$lang$type = true;

om_tutorial.core.Counter.cljs$lang$ctorStr = "om-tutorial.core/Counter";

om_tutorial.core.Counter.cljs$lang$ctorPrWriter = (function (this__18858__auto__,writer__18859__auto__,opt__18860__auto__){
return cljs.core._write.call(null,writer__18859__auto__,"om-tutorial.core/Counter");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map