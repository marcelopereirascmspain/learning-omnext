// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","one","list/one",942123326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"John",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bob",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null),new cljs.core.Keyword("list","two","list/two",521811255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"age","age",-604307804),(27)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Gwen",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jeff",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null)], null);
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
om_tutorial.core.get_people = (function om_tutorial$core$get_people(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__20913_SHARP_){
return cljs.core.get_in.call(null,st,p1__20913_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","one","list/one",942123326),(function (p__20914,key,params){
var map__20915 = p__20914;
var map__20915__$1 = ((((!((map__20915 == null)))?((((map__20915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20915):map__20915);
var env = map__20915__$1;
var state = cljs.core.get.call(null,map__20915__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","two","list/two",521811255),(function (p__20917,key,params){
var map__20918 = p__20917;
var map__20918__$1 = ((((!((map__20918 == null)))?((((map__20918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20918):map__20918);
var env = map__20918__$1;
var state = cljs.core.get.call(null,map__20918__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
if(typeof om_tutorial.core.mutate !== 'undefined'){
} else {
om_tutorial.core.mutate = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","increment","points/increment",1315621678,null),(function (p__20920,_,p__20921){
var map__20922 = p__20920;
var map__20922__$1 = ((((!((map__20922 == null)))?((((map__20922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20922):map__20922);
var state = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20923 = p__20921;
var map__20923__$1 = ((((!((map__20923 == null)))?((((map__20923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20923):map__20923);
var name = cljs.core.get.call(null,map__20923__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20922,map__20922__$1,state,map__20923,map__20923__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);
});})(map__20922,map__20922__$1,state,map__20923,map__20923__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null),(function (p__20927,_,p__20928){
var map__20929 = p__20927;
var map__20929__$1 = ((((!((map__20929 == null)))?((((map__20929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20929):map__20929);
var state = cljs.core.get.call(null,map__20929__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20930 = p__20928;
var map__20930__$1 = ((((!((map__20930 == null)))?((((map__20930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20930):map__20930);
var name = cljs.core.get.call(null,map__20930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20929,map__20929__$1,state,map__20930,map__20930__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__20929,map__20929__$1,state,map__20930,map__20930__$1,name){
return (function (p1__20926_SHARP_){
var n = (p1__20926_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__20929,map__20929__$1,state,map__20930,map__20930__$1,name))
);
});})(map__20929,map__20929__$1,state,map__20930,map__20930__$1,name))
], null);
}));
/**
 * @constructor
 */
om_tutorial.core.Person = (function om_tutorial$core$Person(){
var this__18856__auto__ = this;
React.Component.apply(this__18856__auto__,arguments);

if(!((this__18856__auto__.initLocalState == null))){
this__18856__auto__.state = this__18856__auto__.initLocalState();
} else {
this__18856__auto__.state = {};
}

return this__18856__auto__;
});

om_tutorial.core.Person.prototype = goog.object.clone(React.Component.prototype);

var x20937_20953 = om_tutorial.core.Person.prototype;
x20937_20953.componentWillUpdate = ((function (x20937_20953){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18796__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18796__auto__);
});})(x20937_20953))
;

x20937_20953.shouldComponentUpdate = ((function (x20937_20953){
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
});})(x20937_20953))
;

x20937_20953.componentWillUnmount = ((function (x20937_20953){
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
});})(x20937_20953))
;

x20937_20953.componentDidUpdate = ((function (x20937_20953){
return (function (prev_props__18799__auto__,prev_state__18800__auto__){
var this__18796__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18796__auto__);
});})(x20937_20953))
;

x20937_20953.isMounted = ((function (x20937_20953){
return (function (){
var this__18796__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18796__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20937_20953))
;

x20937_20953.componentWillMount = ((function (x20937_20953){
return (function (){
var this__18796__auto__ = this;
var indexer__18801__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18796__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20937_20953))
;

x20937_20953.render = ((function (x20937_20953){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20938 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20939 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20940 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20941 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20942 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{cljs.core.println.call(null,"Render person",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));

var map__20943 = om.next.props.call(null,this$);
var map__20943__$1 = ((((!((map__20943 == null)))?((((map__20943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20943):map__20943);
var props = map__20943__$1;
var points = cljs.core.get.call(null,map__20943__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var name = cljs.core.get.call(null,map__20943__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return React.DOM.li(null,om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,[cljs.core.str(name),cljs.core.str(", points: "),cljs.core.str(points)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20943,map__20943__$1,props,points,name,_STAR_reconciler_STAR_20938,_STAR_depth_STAR_20939,_STAR_shared_STAR_20940,_STAR_instrument_STAR_20941,_STAR_parent_STAR_20942,this$,x20937_20953){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","increment","points/increment",1315621678,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__20943,map__20943__$1,props,points,name,_STAR_reconciler_STAR_20938,_STAR_depth_STAR_20939,_STAR_shared_STAR_20940,_STAR_instrument_STAR_20941,_STAR_parent_STAR_20942,this$,x20937_20953))
},om.util.force_children.call(null,"+"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20943,map__20943__$1,props,points,name,_STAR_reconciler_STAR_20938,_STAR_depth_STAR_20939,_STAR_shared_STAR_20940,_STAR_instrument_STAR_20941,_STAR_parent_STAR_20942,this$,x20937_20953){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__20943,map__20943__$1,props,points,name,_STAR_reconciler_STAR_20938,_STAR_depth_STAR_20939,_STAR_shared_STAR_20940,_STAR_instrument_STAR_20941,_STAR_parent_STAR_20942,this$,x20937_20953))
},om.util.force_children.call(null,"-"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20942;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20941;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20940;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20939;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20938;
}});})(x20937_20953))
;


om_tutorial.core.Person.prototype.constructor = om_tutorial.core.Person;

om_tutorial.core.Person.prototype.om$isComponent = true;

var x20945_20954 = om_tutorial.core.Person;
x20945_20954.om$next$Ident$ = true;

x20945_20954.om$next$Ident$ident$arity$2 = ((function (x20945_20954){
return (function (this$,p__20946){
var map__20947 = p__20946;
var map__20947__$1 = ((((!((map__20947 == null)))?((((map__20947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20947):map__20947);
var name = cljs.core.get.call(null,map__20947__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x20945_20954))
;

x20945_20954.om$next$IQuery$ = true;

x20945_20954.om$next$IQuery$query$arity$1 = ((function (x20945_20954){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883)], null);
});})(x20945_20954))
;


var x20949_20955 = om_tutorial.core.Person.prototype;
x20949_20955.om$next$Ident$ = true;

x20949_20955.om$next$Ident$ident$arity$2 = ((function (x20949_20955){
return (function (this$,p__20950){
var map__20951 = p__20950;
var map__20951__$1 = ((((!((map__20951 == null)))?((((map__20951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20951):map__20951);
var name = cljs.core.get.call(null,map__20951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x20949_20955))
;

x20949_20955.om$next$IQuery$ = true;

x20949_20955.om$next$IQuery$query$arity$1 = ((function (x20949_20955){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883)], null);
});})(x20949_20955))
;


om_tutorial.core.Person.cljs$lang$type = true;

om_tutorial.core.Person.cljs$lang$ctorStr = "om-tutorial.core/Person";

om_tutorial.core.Person.cljs$lang$ctorPrWriter = (function (this__18858__auto__,writer__18859__auto__,opt__18860__auto__){
return cljs.core._write.call(null,writer__18859__auto__,"om-tutorial.core/Person");
});
om_tutorial.core.person = om.next.factory.call(null,om_tutorial.core.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));
/**
 * @constructor
 */
om_tutorial.core.ListView = (function om_tutorial$core$ListView(){
var this__18856__auto__ = this;
React.Component.apply(this__18856__auto__,arguments);

if(!((this__18856__auto__.initLocalState == null))){
this__18856__auto__.state = this__18856__auto__.initLocalState();
} else {
this__18856__auto__.state = {};
}

return this__18856__auto__;
});

om_tutorial.core.ListView.prototype = goog.object.clone(React.Component.prototype);

var x20960_20968 = om_tutorial.core.ListView.prototype;
x20960_20968.componentWillUpdate = ((function (x20960_20968){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18796__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18796__auto__);
});})(x20960_20968))
;

x20960_20968.shouldComponentUpdate = ((function (x20960_20968){
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
});})(x20960_20968))
;

x20960_20968.componentWillUnmount = ((function (x20960_20968){
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
});})(x20960_20968))
;

x20960_20968.componentDidUpdate = ((function (x20960_20968){
return (function (prev_props__18799__auto__,prev_state__18800__auto__){
var this__18796__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18796__auto__);
});})(x20960_20968))
;

x20960_20968.isMounted = ((function (x20960_20968){
return (function (){
var this__18796__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18796__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20960_20968))
;

x20960_20968.componentWillMount = ((function (x20960_20968){
return (function (){
var this__18796__auto__ = this;
var indexer__18801__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18796__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20960_20968))
;

x20960_20968.render = ((function (x20960_20968){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20961 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20962 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20963 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20964 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20965 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{cljs.core.println.call(null,"Render ListView",cljs.core.first.call(null,om.next.path.call(null,this$)));

var list = om.next.props.call(null,this$);
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,om_tutorial.core.person,list));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20965;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20964;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20963;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20962;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20961;
}});})(x20960_20968))
;


om_tutorial.core.ListView.prototype.constructor = om_tutorial.core.ListView;

om_tutorial.core.ListView.prototype.om$isComponent = true;

var x20966_20969 = om_tutorial.core.ListView;


var x20967_20970 = om_tutorial.core.ListView.prototype;


om_tutorial.core.ListView.cljs$lang$type = true;

om_tutorial.core.ListView.cljs$lang$ctorStr = "om-tutorial.core/ListView";

om_tutorial.core.ListView.cljs$lang$ctorPrWriter = (function (this__18858__auto__,writer__18859__auto__,opt__18860__auto__){
return cljs.core._write.call(null,writer__18859__auto__,"om-tutorial.core/ListView");
});
om_tutorial.core.list_view = om.next.factory.call(null,om_tutorial.core.ListView);
/**
 * @constructor
 */
om_tutorial.core.RootView = (function om_tutorial$core$RootView(){
var this__18856__auto__ = this;
React.Component.apply(this__18856__auto__,arguments);

if(!((this__18856__auto__.initLocalState == null))){
this__18856__auto__.state = this__18856__auto__.initLocalState();
} else {
this__18856__auto__.state = {};
}

return this__18856__auto__;
});

om_tutorial.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x20975_20985 = om_tutorial.core.RootView.prototype;
x20975_20985.componentWillUpdate = ((function (x20975_20985){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18796__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18796__auto__);
});})(x20975_20985))
;

x20975_20985.shouldComponentUpdate = ((function (x20975_20985){
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
});})(x20975_20985))
;

x20975_20985.componentWillUnmount = ((function (x20975_20985){
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
});})(x20975_20985))
;

x20975_20985.componentDidUpdate = ((function (x20975_20985){
return (function (prev_props__18799__auto__,prev_state__18800__auto__){
var this__18796__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18796__auto__);
});})(x20975_20985))
;

x20975_20985.isMounted = ((function (x20975_20985){
return (function (){
var this__18796__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18796__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20975_20985))
;

x20975_20985.componentWillMount = ((function (x20975_20985){
return (function (){
var this__18796__auto__ = this;
var indexer__18801__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18796__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20975_20985))
;

x20975_20985.render = ((function (x20975_20985){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20976 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20977 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20978 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20979 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20980 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{cljs.core.println.call(null,"Render RootView");

var map__20981 = om.next.props.call(null,this$);
var map__20981__$1 = ((((!((map__20981 == null)))?((((map__20981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20981):map__20981);
var one = cljs.core.get.call(null,map__20981__$1,new cljs.core.Keyword("list","one","list/one",942123326));
var two = cljs.core.get.call(null,map__20981__$1,new cljs.core.Keyword("list","two","list/two",521811255));
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h2(null,om.util.force_children.call(null,"List A")),om_tutorial.core.list_view.call(null,one),React.DOM.h2(null,om.util.force_children.call(null,"List B")),om_tutorial.core.list_view.call(null,two)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20980;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20979;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20978;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20977;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20976;
}});})(x20975_20985))
;


om_tutorial.core.RootView.prototype.constructor = om_tutorial.core.RootView;

om_tutorial.core.RootView.prototype.om$isComponent = true;

var x20983_20986 = om_tutorial.core.RootView;
x20983_20986.om$next$IQuery$ = true;

x20983_20986.om$next$IQuery$query$arity$1 = ((function (x20983_20986){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x20983_20986))
;


var x20984_20987 = om_tutorial.core.RootView.prototype;
x20984_20987.om$next$IQuery$ = true;

x20984_20987.om$next$IQuery$query$arity$1 = ((function (x20984_20987){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x20984_20987))
;


om_tutorial.core.RootView.cljs$lang$type = true;

om_tutorial.core.RootView.cljs$lang$ctorStr = "om-tutorial.core/RootView";

om_tutorial.core.RootView.cljs$lang$ctorPrWriter = (function (this__18858__auto__,writer__18859__auto__,opt__18860__auto__){
return cljs.core._write.call(null,writer__18859__auto__,"om-tutorial.core/RootView");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.RootView,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map