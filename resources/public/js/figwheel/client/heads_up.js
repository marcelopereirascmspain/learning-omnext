// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17836__auto__ = [];
var len__17829__auto___25716 = arguments.length;
var i__17830__auto___25717 = (0);
while(true){
if((i__17830__auto___25717 < len__17829__auto___25716)){
args__17836__auto__.push((arguments[i__17830__auto___25717]));

var G__25718 = (i__17830__auto___25717 + (1));
i__17830__auto___25717 = G__25718;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((2) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17837__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25708_25719 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25709_25720 = null;
var count__25710_25721 = (0);
var i__25711_25722 = (0);
while(true){
if((i__25711_25722 < count__25710_25721)){
var k_25723 = cljs.core._nth.call(null,chunk__25709_25720,i__25711_25722);
e.setAttribute(cljs.core.name.call(null,k_25723),cljs.core.get.call(null,attrs,k_25723));

var G__25724 = seq__25708_25719;
var G__25725 = chunk__25709_25720;
var G__25726 = count__25710_25721;
var G__25727 = (i__25711_25722 + (1));
seq__25708_25719 = G__25724;
chunk__25709_25720 = G__25725;
count__25710_25721 = G__25726;
i__25711_25722 = G__25727;
continue;
} else {
var temp__4425__auto___25728 = cljs.core.seq.call(null,seq__25708_25719);
if(temp__4425__auto___25728){
var seq__25708_25729__$1 = temp__4425__auto___25728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25708_25729__$1)){
var c__17574__auto___25730 = cljs.core.chunk_first.call(null,seq__25708_25729__$1);
var G__25731 = cljs.core.chunk_rest.call(null,seq__25708_25729__$1);
var G__25732 = c__17574__auto___25730;
var G__25733 = cljs.core.count.call(null,c__17574__auto___25730);
var G__25734 = (0);
seq__25708_25719 = G__25731;
chunk__25709_25720 = G__25732;
count__25710_25721 = G__25733;
i__25711_25722 = G__25734;
continue;
} else {
var k_25735 = cljs.core.first.call(null,seq__25708_25729__$1);
e.setAttribute(cljs.core.name.call(null,k_25735),cljs.core.get.call(null,attrs,k_25735));

var G__25736 = cljs.core.next.call(null,seq__25708_25729__$1);
var G__25737 = null;
var G__25738 = (0);
var G__25739 = (0);
seq__25708_25719 = G__25736;
chunk__25709_25720 = G__25737;
count__25710_25721 = G__25738;
i__25711_25722 = G__25739;
continue;
}
} else {
}
}
break;
}

var seq__25712_25740 = cljs.core.seq.call(null,children);
var chunk__25713_25741 = null;
var count__25714_25742 = (0);
var i__25715_25743 = (0);
while(true){
if((i__25715_25743 < count__25714_25742)){
var ch_25744 = cljs.core._nth.call(null,chunk__25713_25741,i__25715_25743);
e.appendChild(ch_25744);

var G__25745 = seq__25712_25740;
var G__25746 = chunk__25713_25741;
var G__25747 = count__25714_25742;
var G__25748 = (i__25715_25743 + (1));
seq__25712_25740 = G__25745;
chunk__25713_25741 = G__25746;
count__25714_25742 = G__25747;
i__25715_25743 = G__25748;
continue;
} else {
var temp__4425__auto___25749 = cljs.core.seq.call(null,seq__25712_25740);
if(temp__4425__auto___25749){
var seq__25712_25750__$1 = temp__4425__auto___25749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25712_25750__$1)){
var c__17574__auto___25751 = cljs.core.chunk_first.call(null,seq__25712_25750__$1);
var G__25752 = cljs.core.chunk_rest.call(null,seq__25712_25750__$1);
var G__25753 = c__17574__auto___25751;
var G__25754 = cljs.core.count.call(null,c__17574__auto___25751);
var G__25755 = (0);
seq__25712_25740 = G__25752;
chunk__25713_25741 = G__25753;
count__25714_25742 = G__25754;
i__25715_25743 = G__25755;
continue;
} else {
var ch_25756 = cljs.core.first.call(null,seq__25712_25750__$1);
e.appendChild(ch_25756);

var G__25757 = cljs.core.next.call(null,seq__25712_25750__$1);
var G__25758 = null;
var G__25759 = (0);
var G__25760 = (0);
seq__25712_25740 = G__25757;
chunk__25713_25741 = G__25758;
count__25714_25742 = G__25759;
i__25715_25743 = G__25760;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25705){
var G__25706 = cljs.core.first.call(null,seq25705);
var seq25705__$1 = cljs.core.next.call(null,seq25705);
var G__25707 = cljs.core.first.call(null,seq25705__$1);
var seq25705__$2 = cljs.core.next.call(null,seq25705__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25706,G__25707,seq25705__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25761 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25761.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25761.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25761.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25761);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25762,st_map){
var map__25767 = p__25762;
var map__25767__$1 = ((((!((map__25767 == null)))?((((map__25767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25767):map__25767);
var container_el = cljs.core.get.call(null,map__25767__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25767,map__25767__$1,container_el){
return (function (p__25769){
var vec__25770 = p__25769;
var k = cljs.core.nth.call(null,vec__25770,(0),null);
var v = cljs.core.nth.call(null,vec__25770,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25767,map__25767__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25771,dom_str){
var map__25774 = p__25771;
var map__25774__$1 = ((((!((map__25774 == null)))?((((map__25774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25774):map__25774);
var c = map__25774__$1;
var content_area_el = cljs.core.get.call(null,map__25774__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25776){
var map__25779 = p__25776;
var map__25779__$1 = ((((!((map__25779 == null)))?((((map__25779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25779):map__25779);
var content_area_el = cljs.core.get.call(null,map__25779__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__){
return (function (state_25822){
var state_val_25823 = (state_25822[(1)]);
if((state_val_25823 === (1))){
var inst_25807 = (state_25822[(7)]);
var inst_25807__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25808 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25809 = ["10px","10px","100%","68px","1.0"];
var inst_25810 = cljs.core.PersistentHashMap.fromArrays(inst_25808,inst_25809);
var inst_25811 = cljs.core.merge.call(null,inst_25810,style);
var inst_25812 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25807__$1,inst_25811);
var inst_25813 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25807__$1,msg);
var inst_25814 = cljs.core.async.timeout.call(null,(300));
var state_25822__$1 = (function (){var statearr_25824 = state_25822;
(statearr_25824[(7)] = inst_25807__$1);

(statearr_25824[(8)] = inst_25812);

(statearr_25824[(9)] = inst_25813);

return statearr_25824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25822__$1,(2),inst_25814);
} else {
if((state_val_25823 === (2))){
var inst_25807 = (state_25822[(7)]);
var inst_25816 = (state_25822[(2)]);
var inst_25817 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25818 = ["auto"];
var inst_25819 = cljs.core.PersistentHashMap.fromArrays(inst_25817,inst_25818);
var inst_25820 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25807,inst_25819);
var state_25822__$1 = (function (){var statearr_25825 = state_25822;
(statearr_25825[(10)] = inst_25816);

return statearr_25825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25822__$1,inst_25820);
} else {
return null;
}
}
});})(c__21564__auto__))
;
return ((function (switch__21452__auto__,c__21564__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto____0 = (function (){
var statearr_25829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25829[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto__);

(statearr_25829[(1)] = (1));

return statearr_25829;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto____1 = (function (state_25822){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_25822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e25830){if((e25830 instanceof Object)){
var ex__21456__auto__ = e25830;
var statearr_25831_25833 = state_25822;
(statearr_25831_25833[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25834 = state_25822;
state_25822 = G__25834;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto__ = function(state_25822){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto____1.call(this,state_25822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_25832 = f__21565__auto__.call(null);
(statearr_25832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_25832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25836 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25836,(0),null);
var ln = cljs.core.nth.call(null,vec__25836,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25839 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25839,(0),null);
var file_line = cljs.core.nth.call(null,vec__25839,(1),null);
var file_column = cljs.core.nth.call(null,vec__25839,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25839,file_name,file_line,file_column){
return (function (p1__25837_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25837_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25839,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16771__auto__ = file_line;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var and__16759__auto__ = cause;
if(cljs.core.truth_(and__16759__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16759__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25842 = figwheel.client.heads_up.ensure_container.call(null);
var map__25842__$1 = ((((!((map__25842 == null)))?((((map__25842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25842):map__25842);
var content_area_el = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__){
return (function (state_25890){
var state_val_25891 = (state_25890[(1)]);
if((state_val_25891 === (1))){
var inst_25873 = (state_25890[(7)]);
var inst_25873__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25874 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25875 = ["0.0"];
var inst_25876 = cljs.core.PersistentHashMap.fromArrays(inst_25874,inst_25875);
var inst_25877 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25873__$1,inst_25876);
var inst_25878 = cljs.core.async.timeout.call(null,(300));
var state_25890__$1 = (function (){var statearr_25892 = state_25890;
(statearr_25892[(7)] = inst_25873__$1);

(statearr_25892[(8)] = inst_25877);

return statearr_25892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25890__$1,(2),inst_25878);
} else {
if((state_val_25891 === (2))){
var inst_25873 = (state_25890[(7)]);
var inst_25880 = (state_25890[(2)]);
var inst_25881 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25882 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25883 = cljs.core.PersistentHashMap.fromArrays(inst_25881,inst_25882);
var inst_25884 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25873,inst_25883);
var inst_25885 = cljs.core.async.timeout.call(null,(200));
var state_25890__$1 = (function (){var statearr_25893 = state_25890;
(statearr_25893[(9)] = inst_25880);

(statearr_25893[(10)] = inst_25884);

return statearr_25893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25890__$1,(3),inst_25885);
} else {
if((state_val_25891 === (3))){
var inst_25873 = (state_25890[(7)]);
var inst_25887 = (state_25890[(2)]);
var inst_25888 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25873,"");
var state_25890__$1 = (function (){var statearr_25894 = state_25890;
(statearr_25894[(11)] = inst_25887);

return statearr_25894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25890__$1,inst_25888);
} else {
return null;
}
}
}
});})(c__21564__auto__))
;
return ((function (switch__21452__auto__,c__21564__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21453__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21453__auto____0 = (function (){
var statearr_25898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25898[(0)] = figwheel$client$heads_up$clear_$_state_machine__21453__auto__);

(statearr_25898[(1)] = (1));

return statearr_25898;
});
var figwheel$client$heads_up$clear_$_state_machine__21453__auto____1 = (function (state_25890){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_25890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e25899){if((e25899 instanceof Object)){
var ex__21456__auto__ = e25899;
var statearr_25900_25902 = state_25890;
(statearr_25900_25902[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25903 = state_25890;
state_25890 = G__25903;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21453__auto__ = function(state_25890){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21453__auto____1.call(this,state_25890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21453__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21453__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_25901 = f__21565__auto__.call(null);
(statearr_25901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_25901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21452__auto__ = ((function (c__21564__auto__){
return (function (state_25935){
var state_val_25936 = (state_25935[(1)]);
if((state_val_25936 === (1))){
var inst_25925 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25935__$1 = state_25935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25935__$1,(2),inst_25925);
} else {
if((state_val_25936 === (2))){
var inst_25927 = (state_25935[(2)]);
var inst_25928 = cljs.core.async.timeout.call(null,(400));
var state_25935__$1 = (function (){var statearr_25937 = state_25935;
(statearr_25937[(7)] = inst_25927);

return statearr_25937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25935__$1,(3),inst_25928);
} else {
if((state_val_25936 === (3))){
var inst_25930 = (state_25935[(2)]);
var inst_25931 = figwheel.client.heads_up.clear.call(null);
var state_25935__$1 = (function (){var statearr_25938 = state_25935;
(statearr_25938[(8)] = inst_25930);

return statearr_25938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25935__$1,(4),inst_25931);
} else {
if((state_val_25936 === (4))){
var inst_25933 = (state_25935[(2)]);
var state_25935__$1 = state_25935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25935__$1,inst_25933);
} else {
return null;
}
}
}
}
});})(c__21564__auto__))
;
return ((function (switch__21452__auto__,c__21564__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto____0 = (function (){
var statearr_25942 = [null,null,null,null,null,null,null,null,null];
(statearr_25942[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto__);

(statearr_25942[(1)] = (1));

return statearr_25942;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto____1 = (function (state_25935){
while(true){
var ret_value__21454__auto__ = (function (){try{while(true){
var result__21455__auto__ = switch__21452__auto__.call(null,state_25935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21455__auto__;
}
break;
}
}catch (e25943){if((e25943 instanceof Object)){
var ex__21456__auto__ = e25943;
var statearr_25944_25946 = state_25935;
(statearr_25944_25946[(5)] = ex__21456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25947 = state_25935;
state_25935 = G__25947;
continue;
} else {
return ret_value__21454__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto__ = function(state_25935){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto____1.call(this,state_25935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21453__auto__;
})()
;})(switch__21452__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_25945 = f__21565__auto__.call(null);
(statearr_25945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_25945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map