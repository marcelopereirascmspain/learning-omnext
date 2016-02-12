(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui HelloWorld
  Object
  (render [this]
    (dom/div nil (get (om/props this) :title))))

(def hello (om/factory HelloWorld))

(enable-console-print!)

(js/ReactDOM.render (hello {:title "Bye cruel world!"}) (gdom/getElement "app"))