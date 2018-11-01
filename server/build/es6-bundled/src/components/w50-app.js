define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.createMarker$1=_exports.createMarker=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.Template$1=_exports.Template=_exports.rewritesStyleAttribute$1=_exports.rewritesStyleAttribute=_exports.markerRegex$1=_exports.markerRegex=_exports.nodeMarker$1=_exports.nodeMarker=_exports.marker$1=_exports.marker=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.templateCaches$1=_exports.templateCaches=_exports.render$1=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.render=_exports.parts=_exports.EventPart$1=_exports.EventPart=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.NodePart$1=_exports.NodePart=_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.isPrimitive$1=_exports.isPrimitive=_exports.noChange$1=_exports.noChange=_exports.removeNodes$1=_exports.removeNodes=_exports.reparentNodes$1=_exports.reparentNodes=_exports.isCEPolyfill$1=_exports.isCEPolyfill=_exports.isDirective=_exports.directive=_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.Resolver=_exports.Router=_exports.LitElement=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.html$2=_exports.html$1=_exports.html=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.notEqual$1=_exports.notEqual=_exports.eventOptions$1=_exports.eventOptions=_exports.queryAll$1=_exports.queryAll=_exports.query$1=_exports.query=_exports.property$1=_exports.property=_exports.customElement$1=_exports.customElement=_exports.$sharedStyles=_exports.$sharedRhiddenStyles=_exports.$sharedLiStyles=_exports.$sharedA$styles=_exports.$litHtml=_exports.$template=_exports.$templateResult=_exports.$templateInstance=_exports.$templateFactory=_exports.$shadyRender=_exports.$render=_exports.$parts=_exports.$part=_exports.$modifyTemplate=_exports.$dom=_exports.$directive=_exports.$defaultTemplateProcessor=_exports.$vaadinRouter=_exports.$litElement=_exports.$updatingElement=_exports.$decorators=void 0;_exports.SharedStyles=_exports.SharedRHiddenStyles=_exports.SharedLiStyles=_exports.SharedAStyles=_exports.lastAttributeNameRegex$1=_exports.lastAttributeNameRegex=void 0;const customElement=tagName=>clazz=>{window.customElements.define(tagName,clazz);return clazz};_exports.customElement$1=_exports.customElement=customElement;const property=options=>(proto,name)=>{proto.constructor.createProperty(name,options)};_exports.property$1=_exports.property=property;const query=_query((target,selector)=>target.querySelector(selector));_exports.query$1=_exports.query=query;const queryAll=_query((target,selector)=>target.querySelectorAll(selector));_exports.queryAll$1=_exports.queryAll=queryAll;function _query(queryFn){return selector=>(proto,propName)=>{Object.defineProperty(proto,propName,{get(){return queryFn(this.renderRoot,selector)},enumerable:!0,configurable:!0})}}const eventOptions=options=>(proto,name)=>{Object.assign(proto[name],options)};_exports.eventOptions$1=_exports.eventOptions=eventOptions;_exports.$decorators={customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions};const fromBooleanAttribute=value=>null!==value,toBooleanAttribute=value=>value?"":null,notEqual=(value,old)=>{return old!==value&&(old===old||value===value)};_exports.notEqual$1=_exports.notEqual=notEqual;const defaultPropertyDeclaration={attribute:!0,type:String,reflect:!1,hasChanged:notEqual},microtaskPromise=new Promise(resolve=>resolve(!0)),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING=1<<3;class UpdatingElement extends HTMLElement{constructor(){super();this._updateState=0;this._instanceProperties=void 0;this._updatePromise=microtaskPromise;this._changedProperties=new Map;this._reflectingProperties=void 0;this.initialize()}static get observedAttributes(){this._finalize();const attributes=[];for(const[p,v]of this._classProperties){const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}}return attributes}static createProperty(name,options=defaultPropertyDeclaration){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}this._classProperties.set(name,options);if(this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`;Object.defineProperty(this.prototype,name,{get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this._requestPropertyUpdate(name,oldValue,options)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized){return}const superCtor=Object.getPrototypeOf(this);if("function"===typeof superCtor._finalize){superCtor._finalize()}this._finalized=!0;this._attributeToPropertyMap=new Map;const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];for(const p of propKeys){this.createProperty(p,props[p])}}static _attributeNameForProperty(name,options){const attribute=options!==void 0&&options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}static _propertyValueFromAttribute(value,options){const type=options&&options.type;if(type===void 0){return value}const fromAttribute=type===Boolean?fromBooleanAttribute:"function"===typeof type?type:type.fromAttribute;return fromAttribute?fromAttribute(value):value}static _propertyValueToAttribute(value,options){if(options===void 0||options.reflect===void 0){return}const toAttribute=options.type===Boolean?toBooleanAttribute:options.type&&options.type.toAttribute||String;return toAttribute(value)}initialize(){this.renderRoot=this.createRenderRoot();this._saveInstanceProperties()}_saveInstanceProperties(){for(const[p]of this.constructor._classProperties){if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}}}_applyInstanceProperties(){for(const[p,v]of this._instanceProperties){this[p]=v}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){if(this._updateState&STATE_HAS_UPDATED){if(window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}else{this.requestUpdate()}}disconnectedCallback(){}attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attrValue=ctor._propertyValueToAttribute(value,options);if(attrValue!==void 0){const attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){this._updateState=this._updateState|STATE_IS_REFLECTING;if(null===attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}this._updateState=this._updateState&~STATE_IS_REFLECTING}}}_attributeToProperty(name,value){if(!(this._updateState&STATE_IS_REFLECTING)){const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(propName!==void 0){const options=ctor._classProperties.get(propName);this[propName]=ctor._propertyValueFromAttribute(value,options)}}}requestUpdate(name,oldValue){if(name!==void 0){const options=this.constructor._classProperties.get(name)||defaultPropertyDeclaration;return this._requestPropertyUpdate(name,oldValue,options)}return this._invalidate()}_requestPropertyUpdate(name,oldValue,options){if(!this.constructor._valueHasChanged(this[name],oldValue,options.hasChanged)){return this.updateComplete}if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}if(!0===options.reflect){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}return this._invalidate()}_invalidate(){var _this=this;return babelHelpers.asyncToGenerator(function*(){if(!_this._hasRequestedUpdate){_this._updateState=_this._updateState|STATE_UPDATE_REQUESTED;let resolver;const previousValidatePromise=_this._updatePromise;_this._updatePromise=new Promise(r=>resolver=r);yield previousValidatePromise;_this._validate();resolver(!_this._hasRequestedUpdate)}return _this.updateComplete})()}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}_validate(){if(this._instanceProperties){this._applyInstanceProperties()}if(this.shouldUpdate(this._changedProperties)){const changedProperties=this._changedProperties;this.update(changedProperties);this._markUpdated();if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}else{this._markUpdated()}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}get updateComplete(){return this._updatePromise}shouldUpdate(){return!0}update(){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){for(const[k,v]of this._reflectingProperties){this._propertyToAttribute(k,this[k],v)}this._reflectingProperties=void 0}}updated(){}firstUpdated(){}}_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;UpdatingElement._attributeToPropertyMap=new Map;UpdatingElement._finalized=!0;UpdatingElement._classProperties=new Map;UpdatingElement.properties={};_exports.$updatingElement={notEqual:notEqual,UpdatingElement:UpdatingElement};const directives=new WeakMap,directive=f=>{directives.set(f,!0);return f};_exports.directive=directive;const isDirective=o=>"function"===typeof o&&directives.has(o);_exports.isDirective=isDirective;_exports.$directive={directive:directive,isDirective:isDirective};const isCEPolyfill=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0;_exports.isCEPolyfill$1=_exports.isCEPolyfill=isCEPolyfill;const reparentNodes=(container,start,end=null,before=null)=>{let node=start;while(node!==end){const n=node.nextSibling;container.insertBefore(node,before);node=n}};_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;const removeNodes=(container,startNode,endNode=null)=>{let node=startNode;while(node!==endNode){const n=node.nextSibling;container.removeChild(node);node=n}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;_exports.$dom={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};const noChange={};_exports.noChange$1=_exports.noChange=noChange;_exports.$part={noChange:noChange};const marker=`{{lit-${(Math.random()+"").slice(2)}}}`;_exports.marker$1=_exports.marker=marker;const nodeMarker=`<!--${marker}-->`;_exports.nodeMarker$1=_exports.nodeMarker=nodeMarker;const markerRegex=new RegExp(`${marker}|${nodeMarker}`);_exports.markerRegex$1=_exports.markerRegex=markerRegex;const rewritesStyleAttribute=(()=>{const el=document.createElement("div");el.setAttribute("style","{{bad value}}");return"{{bad value}}"!==el.getAttribute("style")})();_exports.rewritesStyleAttribute$1=_exports.rewritesStyleAttribute=rewritesStyleAttribute;class Template{constructor(result,element){this.parts=[];this.element=element;let index=-1,partIndex=0;const nodesToRemove=[],_prepareTemplate=template=>{const content=template.content,walker=document.createTreeWalker(content,133,null,!1);let previousNode,currentNode;while(walker.nextNode()){index++;previousNode=currentNode;const node=currentNode=walker.currentNode;if(1===node.nodeType){if(node.hasAttributes()){const attributes=node.attributes;let count=0;for(let i=0;i<attributes.length;i++){if(0<=attributes[i].value.indexOf(marker)){count++}}while(0<count--){const stringForPart=result.strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=rewritesStyleAttribute&&"style"===name?"style$":/^[a-zA-Z-]*$/.test(name)?name:name.toLowerCase(),attributeValue=node.getAttribute(attributeLookupName),strings=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings});node.removeAttribute(attributeLookupName);partIndex+=strings.length-1}}if("TEMPLATE"===node.tagName){_prepareTemplate(node)}}else if(3===node.nodeType){const nodeValue=node.nodeValue;if(0>nodeValue.indexOf(marker)){continue}const parent=node.parentNode,strings=nodeValue.split(markerRegex),lastIndex=strings.length-1;partIndex+=lastIndex;for(let i=0;i<lastIndex;i++){parent.insertBefore(""===strings[i]?createMarker():document.createTextNode(strings[i]),node);this.parts.push({type:"node",index:index++})}parent.insertBefore(""===strings[lastIndex]?createMarker():document.createTextNode(strings[lastIndex]),node);nodesToRemove.push(node)}else if(8===node.nodeType){if(node.nodeValue===marker){const parent=node.parentNode,previousSibling=node.previousSibling;if(null===previousSibling||previousSibling!==previousNode||previousSibling.nodeType!==Node.TEXT_NODE){parent.insertBefore(createMarker(),node)}else{index--}this.parts.push({type:"node",index:index++});nodesToRemove.push(node);if(null===node.nextSibling){parent.insertBefore(createMarker(),node)}else{index--}currentNode=previousNode;partIndex++}else{let i=-1;while(-1!==(i=node.nodeValue.indexOf(marker,i+1))){this.parts.push({type:"node",index:-1})}}}}};_prepareTemplate(element);for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}_exports.Template$1=_exports.Template=Template;const isTemplatePartActive=part=>-1!==part.index;_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;const createMarker=()=>document.createComment("");_exports.createMarker$1=_exports.createMarker=createMarker;const lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex$1=_exports.lastAttributeNameRegex=lastAttributeNameRegex;_exports.$template={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,rewritesStyleAttribute:rewritesStyleAttribute,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};class TemplateInstance{constructor(template,processor,options){this._parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this._parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this._parts){if(part!==void 0){part.commit()}}}_clone(){const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),parts=this.template.parts;let partIndex=0,nodeIndex=0;const _prepareInstance=fragment=>{const walker=document.createTreeWalker(fragment,133,null,!1);let node=walker.nextNode();while(partIndex<parts.length&&null!==node){const part=parts[partIndex];if(!isTemplatePartActive(part)){this._parts.push(void 0);partIndex++}else if(nodeIndex===part.index){if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node);this._parts.push(part)}else{this._parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}else{nodeIndex++;if("TEMPLATE"===node.nodeName){_prepareInstance(node.content)}node=walker.nextNode()}}};_prepareInstance(fragment);if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;_exports.$templateInstance={TemplateInstance:TemplateInstance};class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}getHTML(){const l=this.strings.length-1;let html="",isTextBinding=!0;for(let i=0;i<l;i++){const s=this.strings[i];html+=s;const close=s.lastIndexOf(">");isTextBinding=(-1<close||isTextBinding)&&-1===s.indexOf("<",close+1);if(!isTextBinding&&rewritesStyleAttribute){html=html.replace(lastAttributeNameRegex,(match,p1,p2,p3)=>{return"style"===p2?`${p1}style$${p3}`:match})}html+=isTextBinding?nodeMarker:marker}html+=this.strings[l];return html}getTemplateElement(){const template=document.createElement("template");template.innerHTML=this.getHTML();return template}}_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;_exports.$templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};const isPrimitive=value=>null===value||!("object"===typeof value||"function"===typeof value);_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive;class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1;let text="";for(let i=0;i<l;i++){text+=strings[i];const part=this.parts[i];if(part!==void 0){const v=part.value;if(null!=v&&(Array.isArray(v)||"string"!==typeof v&&v[Symbol.iterator])){for(const t of v){text+="string"===typeof t?t:t+""}}else{text+="string"===typeof v?v:v+""}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;class AttributePart{constructor(comitter){this.value=void 0;this.committer=comitter}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive$$1=this.value;this.value=noChange;directive$$1(this)}if(this.value===noChange){return}this.committer.commit()}}_exports.AttributePart$1=_exports.AttributePart=AttributePart;class NodePart{constructor(options){this.value=void 0;this._pendingValue=void 0;this.options=options}appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}appendIntoPart(part){part._insert(this.startNode=createMarker());part._insert(this.endNode=createMarker())}insertAfterPart(ref){ref._insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}const value=this._pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this._commitText(value)}}else if(value instanceof TemplateResult){this._commitTemplateResult(value)}else if(value instanceof Node){this._commitNode(value)}else if(Array.isArray(value)||value[Symbol.iterator]){this._commitIterable(value)}else if(value.then!==void 0){this._commitPromise(value)}else{this._commitText(value)}}_insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}_commitNode(value){if(this.value===value){return}this.clear();this._insert(value);this.value=value}_commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;if(node===this.endNode.previousSibling&&node.nodeType===Node.TEXT_NODE){node.textContent=value}else{this._commitNode(document.createTextNode("string"===typeof value?value:value+""))}this.value=value}_commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value&&this.value.template===template){this.value.update(value.values)}else{const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this._commitNode(fragment);this.value=instance}}_commitIterable(value){if(!Array.isArray(this.value)){this.value=[];this.clear()}const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){itemPart=itemParts[partIndex];if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}_commitPromise(value){this.value=value;value.then(v=>{if(this.value===value){this.setValue(v);this.commit()}})}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}_exports.NodePart$1=_exports.NodePart=NodePart;class BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this._pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}if(this._pendingValue===noChange){return}const value=!!this._pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}}this.value=value;this._pendingValue=noChange}}_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;this.element[this.name]=this._getValue()}}}_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;class PropertyPart extends AttributePart{}_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;let eventOptionsSupported=!1;try{const options={get capture(){eventOptionsSupported=!0;return!1}};window.addEventListener("test",options,options);window.removeEventListener("test",options,options)}catch(_e){}class EventPart{constructor(element,eventName,eventContext){this.value=void 0;this._pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}if(this._pendingValue===noChange){return}const newListener=this._pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this,this._options)}this._options=getOptions(newListener);if(null!=newListener&&(null==oldListener||shouldRemoveListener)){this.element.addEventListener(this.eventName,this,this._options)}this.value=newListener;this._pendingValue=noChange}handleEvent(event){const listener="function"===typeof this.value?this.value:"function"===typeof this.value.handleEvent?this.value.handleEvent:()=>null;listener.call(this.eventContext||this.element,event)}}_exports.EventPart$1=_exports.EventPart=EventPart;const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);_exports.$parts={isPrimitive:isPrimitive,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};class DefaultTemplateProcessor{handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const comitter=new PropertyCommitter(element,name.slice(1),strings);return comitter.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}const comitter=new AttributeCommitter(element,name,strings);return comitter.parts}handleTextExpression(options){return new NodePart(options)}}_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;const defaultTemplateProcessor=new DefaultTemplateProcessor;_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;_exports.$defaultTemplateProcessor={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache=new Map;templateCaches.set(result.type,templateCache)}let template=templateCache.get(result.strings);if(template===void 0){template=new Template(result,result.getTemplateElement());templateCache.set(result.strings,template)}return template}const templateCaches=new Map;_exports.templateCaches$1=_exports.templateCaches=templateCaches;_exports.$templateFactory={templateFactory:templateFactory,templateCaches:templateCaches};const parts$1=new WeakMap;_exports.parts=parts$1;const render=(result,container,options)=>{let part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};_exports.render=render;_exports.$render={parts:parts$1,render:render};const html=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor);_exports.html$2=_exports.html$1=_exports.html=html;const svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor);_exports.svg$2=_exports.svg$1=_exports.svg=svg;_exports.$litHtml={html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,rewritesStyleAttribute:rewritesStyleAttribute,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,TemplateInstance:TemplateInstance,noChange:noChange,isPrimitive:isPrimitive,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart,isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes,directive:directive,isDirective:isDirective,parts:parts$1,render:render,templateFactory:templateFactory,templateCaches:templateCaches};const walkerNodeFilter=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);if(null===currentRemovingNode){currentRemovingNode=node}}if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){part.index=null!==currentRemovingNode?-1:part.index-removeCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=node.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}_exports.$modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected.`+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and`+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache=new Map;templateCaches.set(cacheKey,templateCache)}let template=templateCache.get(result.strings);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.set(result.strings,template)}return template},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.forEach(template=>{const{element:{content}}=template,styles=new Set;Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(renderedDOM,template,scopeName)=>{shadyRenderSet.add(scopeName);const styles=renderedDOM.querySelectorAll("style");if(0===styles.length){return}const condensedStyle=document.createElement("style");for(let i=0;i<styles.length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}removeStylesFromLitTemplates(scopeName);insertNodeIntoTemplate(template,condensedStyle,template.element.content.firstChild);window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);if(window.ShadyCSS.nativeShadow){const style=template.element.content.querySelector("style");renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else{template.element.content.insertBefore(condensedStyle,template.element.content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=(result,container,options)=>{const scopeName=options.scopeName,hasRendered=parts$1.has(container);render(result,container,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));if(container instanceof ShadowRoot&&compatibleShadyCSSVersion&&result instanceof TemplateResult){if(!shadyRenderSet.has(scopeName)){const part=parts$1.get(container),instance=part.value;prepareTemplateStyles(container,instance.template,scopeName)}if(!hasRendered){window.ShadyCSS.styleElement(container.host)}}};_exports.render$1=render$2;_exports.$shadyRender={render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};class LitElement extends UpdatingElement{update(changedProperties){super.update(changedProperties);const templateResult=this.render();if(templateResult instanceof TemplateResult){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}}render(){}}_exports.LitElement=LitElement;LitElement.render=render$2;_exports.$litElement={LitElement:LitElement,html:html,svg:svg,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions};function toArray(objectOrArray){objectOrArray=objectOrArray||[];return Array.isArray(objectOrArray)?objectOrArray:[objectOrArray]}function log(msg){return`[Vaadin.Router] ${msg}`}function logValue(value){if("object"!==typeof value){return value+""}const stringType=Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];if("Object"===stringType||"Array"===stringType){return`${stringType} ${JSON.stringify(value)}`}else{return stringType}}const MODULE="module",NOMODULE="nomodule",bundleKeys=[MODULE,NOMODULE];function ensureBundle(src){if(!src.match(/.+\.[m]?js$/)){throw new Error(log(`Unsupported type for bundle "${src}": .js or .mjs expected.`))}}function ensureRoute(route){if(!route||!isString(route.path)){throw new Error(log(`Expected route config to be an object with a "path" string property, or an array of such objects`))}const bundle=route.bundle,stringKeys=["component","redirect","bundle"];if(!isFunction(route.action)&&!Array.isArray(route.children)&&!isFunction(route.children)&&!isObject(bundle)&&!stringKeys.some(key=>isString(route[key]))){throw new Error(log(`Expected route config "${route.path}" to include either "${stringKeys.join("\", \"")}" `+`or "action" function but none found.`))}if(bundle){if(isString(bundle)){ensureBundle(bundle)}else if(!bundleKeys.some(key=>key in bundle)){throw new Error(log("Expected route bundle to include either \""+NOMODULE+"\" or \""+MODULE+"\" keys, or both"))}else{bundleKeys.forEach(key=>key in bundle&&ensureBundle(bundle[key]))}}if(route.redirect){["bundle","component"].forEach(overriddenProp=>{if(overriddenProp in route){console.warn(log(`Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`))}})}}function ensureRoutes(routes){toArray(routes).forEach(route=>ensureRoute(route))}function loadScript(src,key){let script=document.head.querySelector("script[src=\""+src+"\"][async]");if(!script){script=document.createElement("script");script.setAttribute("src",src);if(key===MODULE){script.setAttribute("type",MODULE)}else if(key===NOMODULE){script.setAttribute(NOMODULE,"")}script.async=!0}return new Promise((resolve,reject)=>{script.onreadystatechange=script.onload=e=>{script.__dynamicImportLoaded=!0;resolve(e)};script.onerror=e=>{if(script.parentNode){script.parentNode.removeChild(script)}reject(e)};if(null===script.parentNode){document.head.appendChild(script)}else if(script.__dynamicImportLoaded){resolve()}})}function loadBundle(bundle){if(isString(bundle)){return loadScript(bundle)}else{return Promise.race(bundleKeys.filter(key=>key in bundle).map(key=>loadScript(bundle[key],key)))}}function fireRouterEvent(type,detail){window.dispatchEvent(new CustomEvent(`vaadin-router-${type}`,{detail}))}function isObject(o){return"object"===typeof o&&!!o}function isFunction(f){return"function"===typeof f}function isString(s){return"string"===typeof s}function getNotFoundError(context){const error=new Error(log(`Page not found (${context.pathname})`));error.context=context;error.code=404;return error}const notFoundResult=new class{};function getAnchorOrigin(anchor){const port=anchor.port,protocol=anchor.protocol,host="http:"===protocol&&"80"===port||"https:"===protocol&&"443"===port?anchor.hostname:anchor.host;return`${protocol}//${host}`}function vaadinRouterGlobalClickHandler(event){if(event.defaultPrevented){return}if(0!==event.button){return}if(event.shiftKey||event.ctrlKey||event.altKey||event.metaKey){return}let anchor=event.target;const path=event.composedPath?event.composedPath():event.path||[];for(let i=0;i<path.length;i++){const target=path[i];if(target.nodeName&&"a"===target.nodeName.toLowerCase()){anchor=target;break}}while(anchor&&"a"!==anchor.nodeName.toLowerCase()){anchor=anchor.parentNode}if(!anchor||"a"!==anchor.nodeName.toLowerCase()){return}if(anchor.target&&"_self"!==anchor.target.toLowerCase()){return}if(anchor.hasAttribute("download")){return}if(anchor.pathname===window.location.pathname&&""!==anchor.hash){return}const origin=anchor.origin||getAnchorOrigin(anchor);if(origin!==window.location.origin){return}event.preventDefault();fireRouterEvent("go",{pathname:anchor.pathname})}const CLICK={activate(){window.document.addEventListener("click",vaadinRouterGlobalClickHandler)},inactivate(){window.document.removeEventListener("click",vaadinRouterGlobalClickHandler)}},isIE=/Trident/.test(navigator.userAgent);if(isIE&&!isFunction(window.PopStateEvent)){window.PopStateEvent=function(inType,params){params=params||{};var e=document.createEvent("Event");e.initEvent(inType,!!params.bubbles,!!params.cancelable);e.state=params.state||null;return e};window.PopStateEvent.prototype=window.Event.prototype}function vaadinRouterGlobalPopstateHandler(event){if("vaadin-router-ignore"===event.state){return}fireRouterEvent("go",{pathname:window.location.pathname})}const POPSTATE={activate(){window.addEventListener("popstate",vaadinRouterGlobalPopstateHandler)},inactivate(){window.removeEventListener("popstate",vaadinRouterGlobalPopstateHandler)}};var pathToRegexp_1=pathToRegexp,DEFAULT_DELIMITER="/",DEFAULT_DELIMITERS="./",PATH_REGEXP=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function parse(str,options){var tokens=[],key=0,index=0,path="",defaultDelimiter=options&&options.delimiter||DEFAULT_DELIMITER,delimiters=options&&options.delimiters||DEFAULT_DELIMITERS,pathEscaped=!1,res;while(null!==(res=PATH_REGEXP.exec(str))){var m=res[0],escaped=res[1],offset=res.index;path+=str.slice(index,offset);index=offset+m.length;if(escaped){path+=escaped[1];pathEscaped=!0;continue}var prev="",next=str[index],name=res[2],capture=res[3],group=res[4],modifier=res[5];if(!pathEscaped&&path.length){var k=path.length-1;if(-1<delimiters.indexOf(path[k])){prev=path[k];path=path.slice(0,k)}}if(path){tokens.push(path);path="";pathEscaped=!1}var partial=""!==prev&&next!==void 0&&next!==prev,delimiter=prev||defaultDelimiter,pattern=capture||group;tokens.push({name:name||key++,prefix:prev,delimiter:delimiter,optional:"?"===modifier||"*"===modifier,repeat:"+"===modifier||"*"===modifier,partial:partial,pattern:pattern?escapeGroup(pattern):"[^"+escapeString(delimiter)+"]+?"})}if(path||index<str.length){tokens.push(path+str.substr(index))}return tokens}function tokensToFunction(tokens){for(var matches=Array(tokens.length),i=0;i<tokens.length;i++){if("object"===typeof tokens[i]){matches[i]=new RegExp("^(?:"+tokens[i].pattern+")$")}}return function(data,options){for(var path="",encode=options&&options.encode||encodeURIComponent,i=0,token;i<tokens.length;i++){token=tokens[i];if("string"===typeof token){path+=token;continue}var value=data?data[token.name]:void 0,segment;if(Array.isArray(value)){if(!token.repeat){throw new TypeError("Expected \""+token.name+"\" to not repeat, but got array")}if(0===value.length){if(token.optional)continue;throw new TypeError("Expected \""+token.name+"\" to not be empty")}for(var j=0;j<value.length;j++){segment=encode(value[j],token);if(!matches[i].test(segment)){throw new TypeError("Expected all \""+token.name+"\" to match \""+token.pattern+"\"")}path+=(0===j?token.prefix:token.delimiter)+segment}continue}if("string"===typeof value||"number"===typeof value||"boolean"===typeof value){segment=encode(value+"",token);if(!matches[i].test(segment)){throw new TypeError("Expected \""+token.name+"\" to match \""+token.pattern+"\", but got \""+segment+"\"")}path+=token.prefix+segment;continue}if(token.optional){if(token.partial)path+=token.prefix;continue}throw new TypeError("Expected \""+token.name+"\" to be "+(token.repeat?"an array":"a string"))}return path}}function escapeString(str){return str.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function escapeGroup(group){return group.replace(/([=!:$/()])/g,"\\$1")}function flags(options){return options&&options.sensitive?"":"i"}function regexpToRegexp(path,keys){if(!keys)return path;var groups=path.source.match(/\((?!\?)/g);if(groups){for(var i=0;i<groups.length;i++){keys.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null})}}return path}function arrayToRegexp(path,keys,options){for(var parts=[],i=0;i<path.length;i++){parts.push(pathToRegexp(path[i],keys,options).source)}return new RegExp("(?:"+parts.join("|")+")",flags(options))}function stringToRegexp(path,keys,options){return tokensToRegExp(parse(path,options),keys,options)}function tokensToRegExp(tokens,keys,options){options=options||{};for(var strict=options.strict,end=!1!==options.end,delimiter=escapeString(options.delimiter||DEFAULT_DELIMITER),delimiters=options.delimiters||DEFAULT_DELIMITERS,endsWith=[].concat(options.endsWith||[]).map(escapeString).concat("$").join("|"),route="",isEndDelimited=0===tokens.length,i=0,token;i<tokens.length;i++){token=tokens[i];if("string"===typeof token){route+=escapeString(token);isEndDelimited=i===tokens.length-1&&-1<delimiters.indexOf(token[token.length-1])}else{var prefix=escapeString(token.prefix),capture=token.repeat?"(?:"+token.pattern+")(?:"+prefix+"(?:"+token.pattern+"))*":token.pattern;if(keys)keys.push(token);if(token.optional){if(token.partial){route+=prefix+"("+capture+")?"}else{route+="(?:"+prefix+"("+capture+"))?"}}else{route+=prefix+"("+capture+")"}}}if(end){if(!strict)route+="(?:"+delimiter+")?";route+="$"===endsWith?"$":"(?="+endsWith+")"}else{if(!strict)route+="(?:"+delimiter+"(?="+endsWith+"))?";if(!isEndDelimited)route+="(?="+delimiter+"|"+endsWith+")"}return new RegExp("^"+route,flags(options))}function pathToRegexp(path,keys,options){if(path instanceof RegExp){return regexpToRegexp(path,keys)}if(Array.isArray(path)){return arrayToRegexp(path,keys,options)}return stringToRegexp(path,keys,options)}pathToRegexp_1.parse=parse;pathToRegexp_1.compile=function(str,options){return tokensToFunction(parse(str,options))};pathToRegexp_1.tokensToFunction=tokensToFunction;pathToRegexp_1.tokensToRegExp=tokensToRegExp;const{hasOwnProperty}=Object.prototype,cache=new Map;cache.set("|false",{keys:[],pattern:/(?:)/});function decodeParam(val){try{return decodeURIComponent(val)}catch(err){return val}}function matchPath(routepath,path,exact,parentKeys,parentParams){exact=!!exact;const cacheKey=`${routepath}|${exact}`;let regexp=cache.get(cacheKey);if(!regexp){const keys=[];regexp={keys,pattern:pathToRegexp_1(routepath,keys,{end:exact,strict:""===routepath})};cache.set(cacheKey,regexp)}const m=regexp.pattern.exec(path);if(!m){return null}const params=Object.assign({},parentParams);for(let i=1;i<m.length;i++){const key=regexp.keys[i-1],prop=key.name,value=m[i];if(value!==void 0||!hasOwnProperty.call(params,prop)){if(key.repeat){params[prop]=value?value.split(key.delimiter).map(decodeParam):[]}else{params[prop]=value?decodeParam(value):value}}}return{path:m[0],keys:(parentKeys||[]).concat(regexp.keys),params}}function matchRoute(route,pathname,ignoreLeadingSlash,parentKeys,parentParams){let match,childMatches,childIndex=0,routepath=route.path||"";if("/"===routepath.charAt(0)){if(ignoreLeadingSlash){routepath=routepath.substr(1)}ignoreLeadingSlash=!0}return{next(routeToSkip){if(route===routeToSkip){return{done:!0}}const children=route.__children=route.__children||route.children;if(!match){match=matchPath(routepath,pathname,!children,parentKeys,parentParams);if(match){return{done:!1,value:{route,keys:match.keys,params:match.params,path:match.path}}}}if(match&&children){while(childIndex<children.length){if(!childMatches){const childRoute=children[childIndex];childRoute.parent=route;let matchedLength=match.path.length;if(0<matchedLength&&"/"===pathname.charAt(matchedLength)){matchedLength+=1}childMatches=matchRoute(childRoute,pathname.substr(matchedLength),ignoreLeadingSlash,match.keys,match.params)}const childMatch=childMatches.next(routeToSkip);if(!childMatch.done){return{done:!1,value:childMatch.value}}childMatches=null;childIndex++}}return{done:!0}}}}function resolveRoute(context){if(isFunction(context.route.action)){return context.route.action(context)}}function isChildRoute(parentRoute,childRoute){let route=childRoute;while(route){route=route.parent;if(route===parentRoute){return!0}}return!1}function generateErrorMessage(currentContext){let errorMessage=`Path '${currentContext.pathname}' is not properly resolved due to an error.`;const routePath=(currentContext.route||{}).path;if(routePath){errorMessage+=` Resolution had failed on route: '${routePath}'`}return errorMessage}function addRouteToChain(context,match){const{route,path}=match;function shouldDiscardOldChain(oldChain,route){return!route.parent||!oldChain||!oldChain.length||oldChain[oldChain.length-1].route!==route.parent}if(route&&!route.__synthetic){const item={path,route};if(shouldDiscardOldChain(context.chain,route)){context.chain=[item]}else{context.chain.push(item)}}}class Resolver{constructor(routes,options={}){if(Object(routes)!==routes){throw new TypeError("Invalid routes")}this.baseUrl=options.baseUrl||"";this.errorHandler=options.errorHandler;this.resolveRoute=options.resolveRoute||resolveRoute;this.context=Object.assign({resolver:this},options.context);this.root=Array.isArray(routes)?{path:"",__children:routes,parent:null,__synthetic:!0}:routes;this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(routes){ensureRoutes(routes);const newRoutes=[...toArray(routes)];this.root.__children=newRoutes}addRoutes(routes){ensureRoutes(routes);this.root.__children.push(...toArray(routes));return this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(pathnameOrContext){const context=Object.assign({},this.context,isString(pathnameOrContext)?{pathname:pathnameOrContext}:pathnameOrContext),match=matchRoute(this.root,context.pathname.substr(this.baseUrl.length)),resolve=this.resolveRoute;let matches=null,nextMatches=null,currentContext=context;function next(resume,parent=matches.value.route,prevResult){const routeToSkip=null===prevResult&&matches.value.route;matches=nextMatches||match.next(routeToSkip);nextMatches=null;if(!resume){if(matches.done||!isChildRoute(parent,matches.value.route)){nextMatches=matches;return Promise.resolve(notFoundResult)}}if(matches.done){return Promise.reject(getNotFoundError(context))}addRouteToChain(context,matches.value);currentContext=Object.assign({},context,matches.value);return Promise.resolve(resolve(currentContext)).then(resolution=>{if(null!==resolution&&resolution!==void 0&&resolution!==notFoundResult){currentContext.result=resolution.result||resolution;return currentContext}return next(resume,parent,resolution)})}context.next=next;return Promise.resolve().then(()=>next(!0,this.root)).catch(error=>{const errorMessage=generateErrorMessage(currentContext);if(!error){error=new Error(errorMessage)}else{console.warn(errorMessage)}error.context=error.context||currentContext;if(!(error instanceof DOMException)){error.code=error.code||500}if(this.errorHandler){currentContext.result=this.errorHandler(error);return currentContext}throw error})}}_exports.Resolver=Resolver;Resolver.pathToRegexp=pathToRegexp_1;let triggers=[];function setNavigationTriggers(newTriggers){triggers.forEach(trigger=>trigger.inactivate());newTriggers.forEach(trigger=>trigger.activate());triggers=newTriggers}const willAnimate=elem=>{const name=getComputedStyle(elem).getPropertyValue("animation-name");return name&&"none"!==name},waitForAnimation=(elem,cb)=>{const listener=()=>{elem.removeEventListener("animationend",listener);cb()};elem.addEventListener("animationend",listener)};function animate(elem,className){elem.classList.add(className);return new Promise(resolve=>{if(willAnimate(elem)){const rect=elem.getBoundingClientRect(),size=`height: ${rect.bottom-rect.top}px; width: ${rect.right-rect.left}px`;elem.setAttribute("style",`position: absolute; ${size}`);waitForAnimation(elem,()=>{elem.classList.remove(className);elem.removeAttribute("style");resolve()})}else{elem.classList.remove(className);resolve()}})}function isResultNotEmpty(result){return null!==result&&result!==void 0}function copyContextWithoutNext(context){const copy=Object.assign({},context);delete copy.next;return copy}function createLocation({pathname="",chain=[],params={},redirectFrom},route){return{pathname,routes:chain.map(item=>item.route),route:!route&&chain.length&&chain[chain.length-1].route||route,params,redirectFrom}}function createRedirect(context,pathname){const params=Object.assign({},context.params);return{redirect:{pathname,from:context.pathname,params}}}function renderComponent(context,component){const element=document.createElement(component);element.location=createLocation(context);const index=context.chain.map(item=>item.route).indexOf(context.route);context.chain[index].element=element;return element}function runCallbackIfPossible(callback,args,thisArg){if(isFunction(callback)){return callback.apply(thisArg,args)}}function amend(amendmentFunction,args,element){return amendmentResult=>{if(amendmentResult&&(amendmentResult.cancel||amendmentResult.redirect)){return amendmentResult}if(element){return runCallbackIfPossible(element[amendmentFunction],args,element)}}}function processNewChildren(newChildren,route){if(!Array.isArray(newChildren)&&!isObject(newChildren)){throw new Error(log(`Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`))}route.__children=[];const childRoutes=toArray(newChildren);for(let i=0;i<childRoutes.length;i++){ensureRoute(childRoutes[i]);route.__children.push(childRoutes[i])}}function removeDomNodes(nodes){if(nodes&&nodes.length){const parent=nodes[0].parentNode;for(let i=0;i<nodes.length;i++){parent.removeChild(nodes[i])}}}function getMatchedPath(chain){return chain.map(item=>item.path).reduce((prev,path)=>{if(path.length){return prev+("/"===prev.charAt(prev.length-1)?"":"/")+path}return prev})}class Router extends Resolver{constructor(outlet,options){super([],Object.assign({},options));this.resolveRoute=context=>this.__resolveRoute(context);const triggers=Router.NavigationTrigger;Router.setTriggers.apply(Router,Object.keys(triggers).map(key=>triggers[key]));this.ready;this.ready=Promise.resolve(outlet);this.location;this.location=createLocation({});this.__lastStartedRenderId=0;this.__navigationEventHandler=this.__onNavigationEvent.bind(this);this.setOutlet(outlet);this.subscribe()}__resolveRoute(context){const route=context.route;let callbacks=Promise.resolve();if(isFunction(route.children)){callbacks=callbacks.then(()=>route.children(copyContextWithoutNext(context))).then(children=>{if(!isResultNotEmpty(children)&&!isFunction(route.children)){children=route.children}processNewChildren(children,route)})}const commands={redirect:path=>createRedirect(context,path),component:component=>renderComponent(context,component)};return callbacks.then(()=>runCallbackIfPossible(route.action,[context,commands],route)).then(result=>{if(isResultNotEmpty(result)){if(result instanceof HTMLElement||result.redirect||result===notFoundResult){return result}}if(isString(route.redirect)){return commands.redirect(route.redirect)}if(route.bundle){return loadBundle(route.bundle).then(()=>{},()=>{throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`))})}}).then(result=>{if(isResultNotEmpty(result)){return result}if(isString(route.component)){return commands.component(route.component)}})}setOutlet(outlet){if(outlet){this.__ensureOutlet(outlet)}this.__outlet=outlet}getOutlet(){return this.__outlet}setRoutes(routes){super.setRoutes(routes);this.__onNavigationEvent()}render(pathnameOrContext,shouldUpdateHistory){const renderId=++this.__lastStartedRenderId,pathname=pathnameOrContext.pathname||pathnameOrContext;this.ready=this.resolve(pathnameOrContext).then(context=>this.__fullyResolveChain(context)).then(context=>{if(renderId===this.__lastStartedRenderId){const previousContext=this.__previousContext;if(context===previousContext){return this.location}if(shouldUpdateHistory){this.__updateBrowserHistory(context.pathname,context.redirectFrom)}this.__addAppearingContent(context,previousContext);const animationDone=this.__animateIfNeeded(context);this.__runOnAfterEnterCallbacks(context);this.__runOnAfterLeaveCallbacks(context,previousContext);return animationDone.then(()=>{if(renderId===this.__lastStartedRenderId){this.__removeDisappearingContent();this.__previousContext=context;this.location=createLocation(context);fireRouterEvent("location-changed",{router:this,location:this.location});return this.location}})}}).catch(error=>{if(renderId===this.__lastStartedRenderId){if(shouldUpdateHistory){this.__updateBrowserHistory(pathname)}removeDomNodes(this.__outlet&&this.__outlet.children);this.location=createLocation({pathname});fireRouterEvent("error",{router:this,error,pathname});throw error}});return this.ready}__fullyResolveChain(originalContext,currentContext=originalContext){return this.__amendWithResolutionResult(currentContext).then(amendedContext=>{const initialContext=amendedContext!==currentContext?amendedContext:originalContext;return amendedContext.next().then(nextContext=>{if(null===nextContext||nextContext===notFoundResult){if(amendedContext.pathname!==getMatchedPath(amendedContext.chain)){throw getNotFoundError(initialContext)}}return nextContext&&nextContext!==notFoundResult?this.__fullyResolveChain(initialContext,nextContext):this.__amendWithOnBeforeCallbacks(initialContext)})})}__amendWithResolutionResult(context){const result=context.result;if(result instanceof HTMLElement){return Promise.resolve(context)}else if(result.redirect){return this.__redirect(result.redirect,context.__redirectCount).then(context=>this.__amendWithResolutionResult(context))}else if(result instanceof Error){return Promise.reject(result)}else{return Promise.reject(new Error(log(`Invalid route resolution result for path "${context.pathname}". `+`Expected redirect object or HTML element, but got: "${logValue(result)}". `+`Double check the action return value for the route.`)))}}__amendWithOnBeforeCallbacks(contextWithFullChain){return this.__runOnBeforeCallbacks(contextWithFullChain).then(amendedContext=>{if(amendedContext===this.__previousContext||amendedContext===contextWithFullChain){return amendedContext}return this.__fullyResolveChain(amendedContext)})}__runOnBeforeCallbacks(newContext){const previousContext=this.__previousContext||{},previousChain=previousContext.chain||[],newChain=newContext.chain;let callbacks=Promise.resolve();const prevent=()=>({cancel:!0}),redirect=pathname=>createRedirect(newContext,pathname);newContext.__divergedChainIndex=0;if(previousChain.length){for(let i=0;i<Math.min(previousChain.length,newChain.length);i=++newContext.__divergedChainIndex){if(previousChain[i].route!==newChain[i].route||previousChain[i].path!==newChain[i].path||(previousChain[i].element&&previousChain[i].element.localName)!==(newChain[i].element&&newChain[i].element.localName)){break}}for(let i=previousChain.length-1;i>=newContext.__divergedChainIndex;i--){const location=createLocation(newContext);callbacks=callbacks.then(amend("onBeforeLeave",[location,{prevent},this],previousChain[i].element)).then(result=>{if(!(result||{}).redirect){return result}})}}for(let i=newContext.__divergedChainIndex;i<newChain.length;i++){const location=createLocation(newContext,newChain[i].route);callbacks=callbacks.then(amend("onBeforeEnter",[location,{prevent,redirect},this],newChain[i].element))}return callbacks.then(amendmentResult=>{if(amendmentResult){if(amendmentResult.cancel){return this.__previousContext}if(amendmentResult.redirect){return this.__redirect(amendmentResult.redirect,newContext.__redirectCount)}}return newContext})}__redirect(redirectData,counter){if(counter>256){throw new Error(log(`Too many redirects when rendering ${redirectData.from}`))}return this.resolve({pathname:this.constructor.urlForPath(redirectData.pathname,redirectData.params),redirectFrom:redirectData.from,__redirectCount:(counter||0)+1})}__ensureOutlet(outlet=this.__outlet){if(!(outlet instanceof Node)){throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`))}}__updateBrowserHistory(pathname,replace){if(window.location.pathname!==pathname){const changeState=replace?"replaceState":"pushState";window.history[changeState](null,document.title,pathname);window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__addAppearingContent(context,previousContext){this.__ensureOutlet();this.__removeAppearingContent();let deepestCommonParent=this.__outlet;for(let i=0;i<context.__divergedChainIndex;i++){const unchangedElement=previousContext&&previousContext.chain[i].element;if(unchangedElement){if(unchangedElement.parentNode===deepestCommonParent){context.chain[i].element=unchangedElement;deepestCommonParent=unchangedElement}else{break}}}this.__disappearingContent=Array.from(deepestCommonParent.children);this.__appearingContent=[];let parentElement=deepestCommonParent;for(let i=context.__divergedChainIndex;i<context.chain.length;i++){const elementToAdd=context.chain[i].element;if(elementToAdd){parentElement.appendChild(elementToAdd);if(parentElement===deepestCommonParent){this.__appearingContent.push(elementToAdd)}parentElement=elementToAdd}}}__removeDisappearingContent(){if(this.__disappearingContent){removeDomNodes(this.__disappearingContent)}this.__disappearingContent=null;this.__appearingContent=null}__removeAppearingContent(){if(this.__disappearingContent&&this.__appearingContent){removeDomNodes(this.__appearingContent);this.__disappearingContent=null;this.__appearingContent=null}}__runOnAfterLeaveCallbacks(currentContext,targetContext){if(!targetContext){return}for(let i=targetContext.chain.length-1;i>=currentContext.__divergedChainIndex;i--){const currentComponent=targetContext.chain[i].element;if(!currentComponent){continue}try{const location=createLocation(currentContext);runCallbackIfPossible(currentComponent.onAfterLeave,[location,{},targetContext.resolver],currentComponent)}finally{removeDomNodes(currentComponent.children)}}}__runOnAfterEnterCallbacks(currentContext){for(let i=currentContext.__divergedChainIndex;i<currentContext.chain.length;i++){const currentComponent=currentContext.chain[i].element||{},location=createLocation(currentContext,currentContext.chain[i].route);runCallbackIfPossible(currentComponent.onAfterEnter,[location,{},currentContext.resolver],currentComponent)}}__animateIfNeeded(context){const from=(this.__disappearingContent||[])[0],to=(this.__appearingContent||[])[0],promises=[],chain=context.chain;let config;for(let i=chain.length;0<i;i--){if(chain[i-1].route.animate){config=chain[i-1].route.animate;break}}if(from&&to&&config){const leave=isObject(config)&&config.leave||"leaving",enter=isObject(config)&&config.enter||"entering";promises.push(animate(from,leave));promises.push(animate(to,enter))}return Promise.all(promises).then(()=>context)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(event){const pathname=event?event.detail.pathname:window.location.pathname;this.render(pathname,!0)}static setTriggers(...triggers){setNavigationTriggers(triggers)}static urlForPath(path,parameters){return Router.pathToRegexp.compile(path)(parameters)}static go(pathname){fireRouterEvent("go",{pathname})}}_exports.Router=Router;const DEV_MODE_CODE_REGEXP=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;function isMinified(){return uncommentAndRun(function(){return!0})}function isDevelopmentMode(){try{return isForcedDevelopmentMode()||isLocalhost()&&!isMinified()&&!isFlowProductionMode()}catch(e){return!1}}function isForcedDevelopmentMode(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost(){return 0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)}function isFlowProductionMode(){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients){const productionModeApps=Object.keys(window.Vaadin.Flow.clients).map(key=>window.Vaadin.Flow.clients[key]).filter(client=>client.productionMode);if(0<productionModeApps.length){return!0}}return!1}function uncommentAndRun(callback,args){if("function"!==typeof callback){return}const match=DEV_MODE_CODE_REGEXP.exec(callback.toString());if(match){try{callback=new Function(match[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}}return callback(args)}window.Vaadin=window.Vaadin||{};const runIfDevelopmentMode=function(callback,args){if(window.Vaadin.developmentMode){return uncommentAndRun(callback,args)}};if(window.Vaadin.developmentMode===void 0){window.Vaadin.developmentMode=isDevelopmentMode()}function maybeGatherAndSendStats(){}window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.2.0-pre.2"});(function(){if("function"===typeof runIfDevelopmentMode){return runIfDevelopmentMode(maybeGatherAndSendStats)}})();Router.NavigationTrigger={POPSTATE,CLICK};_exports.$vaadinRouter={Router:Router,Resolver:Resolver};const SharedAStyles=html`
<style>
  a, a:visited {
    color: inherit;
    text-decoration: none;
  }
</style>
`;_exports.SharedAStyles=SharedAStyles;_exports.$sharedA$styles={SharedAStyles:SharedAStyles};const SharedLiStyles=html`
<style>
  li {
    list-style: none;
  }
</style>
`;_exports.SharedLiStyles=SharedLiStyles;_exports.$sharedLiStyles={SharedLiStyles:SharedLiStyles};const SharedRHiddenStyles=html`
<style>
  .readable-hidden {
    display: block;
    clip-path: inset(100%);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; /* added line */
    width: 1px;
  }
</style>
`;_exports.SharedRHiddenStyles=SharedRHiddenStyles;_exports.$sharedRhiddenStyles={SharedRHiddenStyles:SharedRHiddenStyles};const SharedStyles=html`
<style>
  :host {
    display: block;
    box-sizing: border-box;
    font-family: "NotoSansKR", sans-serif;
  }
  section, p, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }
  section {
    font-size: 16px;
    width: 100%;
    padding-top: 57px;
    padding-bottom: 57px;
  }
  section > * {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
    padding-left: 34px;
    padding-right: 34px;
  }
  section > figure {
    padding-left: 0;
    padding-right: 0;
  }
  section:nth-child(2) {
    background-color: #f7f6f4;
  }
  section:nth-child(3) {
    background-color: #f1efed;
  }
  section:last-child, section:first-child {
    background-color: transparent;
  }
  blockquote {
    margin: 0;
    text-align: center;
  }
  blockquote::before {
    content:"“";
  }
  blockquote::after {
    content:"”";
  }
  h1 {
    margin-top: 23px;
    margin-bottom: 60px;
    font-family: "nJoyStories", serif;
    font-weight: bold;
  }
  h1 .num {
    display: inline-block;
    height: 56px;
    font-size: 50px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }
  h1 .title {
    display: block;
    margin-top: 5px;
    line-height: 60px;
    height: 60px;
    font-size: 60px;
  }
  h2 {
    font-family: "SPMyungJo", serif;
    font-size: 26px;
    margin-top: 11px;
    margin-bottom: 57px;
  }
  p {
    margin-top: 20px;
  }
  figure {
    max-width: 768px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  figcaption {
    color: #a4a09d;
    text-align: center;
    font-size: 14px;
  }
  figcaption::before {
    content: "<";
  }
  figcaption::after {
    content: ">";
  }
  img {
    width: 100%;
  }
  blockquote {
    font-family: "SPMyungJo", serif;
    max-width: 768px;
    margin: 80px auto;
    text-align: left;
  }
  @media screen and (max-width: 360px) {
    section > *, blockquote {
      margin-left: 20px;
      margin-right: 20px;
      padding: 0;
    }
    figure {
      padding: 0;
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
`;_exports.SharedStyles=SharedStyles;_exports.$sharedStyles={SharedStyles:SharedStyles};customElements.define("w50-404",class extends LitElement{render(){return html`
      <p>존재하지 않는 경로 입니다.</p>
    `}});class W50NavItem extends LitElement{static get properties(){return{path:{type:Number},caption:{type:String},isCurrent:{type:Boolean},num:{type:Number}}}constructor(){super()}onChangePart(pt){this.dispatchEvent(new CustomEvent("changePart",{bubbles:!0,composed:!0,detail:{part:pt}}))}render(){return html`
    ${SharedStyles}
    ${SharedAStyles}
    
    <style>
      :host {
        --a-size: 102px;
        --a-bb: 10px;

        color: var(--not-current);
        font-family: "SPMyungJo", serif;
        font-weight: bold;
      }
      :host(.current) {
        color: var(--point-pt${this.num});
      }
      a:hover {
        background-color: #f1efed;
      }
      .num {
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #d7cabe;
        border-bottom-color: var(--not-current);
      }
      
      :host(.current) .li1 {
        color: #669aa7;
      }
      :host(.current) .li2 {
        color: #d4644a;
      }
      :host(.current) .li3 {
        color: #e5ae0e;
      }
      :host(.current) .li1 a, :host(.current) .li1 .num {
        border-bottom-color: #669aa7;
      }
      :host(.current) .li2 a, :host(.current) .li2 .num {
        border-bottom-color: #d4644a;
      }
      :host(.current) .li3 a, :host(.current) .li3 .num {
        border-bottom-color: #e5ae0e;
      }
      :host(.current) .num {
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: var(--point-pt${this.num});
      }

      a {
        box-sizing: border-box;
        display: block;
        height: var(--a-size);
        text-align: center;
        border-bottom: var(--a-bb) solid var(--not-current);
        padding-top: 23px;
      }
      :host(.current) a {
        border-bottom-width: var(--a-bb);
        border-bottom-style: solid;
        border-bottom-color: var(--point-pt${this.num});
      }
      span {
        display: block;
        font-size: 12px;
      }
      .num {
        display: inline-block;
        font-size: 20px;
        line-height: 1.4;
      }
      .caption {
        margin-top: 5px;
      }
    </style>
    <li class="li${this.num}">
      <a href="${this.path}">
        <span class="num">0${this.num}</span>
        <span class="caption">${this.caption}</span>
      </a>
    </li>
    `}}customElements.define("w50-nav-item",W50NavItem);class W50Nav extends LitElement{static get properties(){return{currentPart:{type:Number},routes:{type:Array}}}constructor(){super()}firstUpdated(){this.addEventListener("changePart",e=>{this.currentPart=e.detail.part;if("/"===this.currentPart){this.currentPart=1}})}render(){return html`
    ${SharedStyles}
    ${SharedLiStyles}
    <style>
      :host {
        width: 100%;
        z-index: 1000;
        background-color: #ffffff;
        width: 100%;
        box-shadow: 0 0 7px 0 rgba(0,0,0,0.4);
      }
      ul {
        display: flex;
        justify-content: center;
        max-width: 768px;
        margin: 0 auto;
        padding: 0;
      }
      li {
        flex-grow: 1;
      }
    </style>
    
    <ul>
    ${this.routes.map((v,i)=>{return html`
        <li>
          <w50-nav-item class="${this.currentPart===i?"current":""}" @click="${()=>{this.currentPart=i}}" .num="${i+1}" .caption="${v.caption}" .path="${v.path}" .isCurrent="${this.currentPart===i}"></w50-nav-item>
        </li>`})}
    </ul>`}}customElements.define("w50-nav",W50Nav);class W50Pt0 extends LitElement{static get properties(){return{}}constructor(){super()}firstUpdated(){const slideIn=this.shadowRoot.querySelectorAll(".slide-in > blockquote"),slideIn2=this.shadowRoot.querySelectorAll(".slide-in-2 > p");setTimeout(function(){slideIn[0].className="on"},300+700);setTimeout(function(){slideIn[1].className="on"},500+700);setTimeout(function(){slideIn[2].className="on"},700+700);setTimeout(function(){slideIn2[0].className="on"},900+700);setTimeout(function(){slideIn2[1].className="on"},1100+700);setTimeout(function(){slideIn2[2].className="on"},1300+700);setTimeout(function(){slideIn2[3].className="on"},1500+700);setTimeout(function(){slideIn2[4].className="on"},1700+700)}render(){return html`
    ${SharedStyles}
    ${SharedAStyles}
    ${SharedRHiddenStyles}
    <style>
      :host {
        --section-bg: #b08980;
        font-family: "SPMyungJo", serif;
        font-weight: bold;
      }
      .header {
        font-family: "NotoSansKR", sans-serif;
        font-weight: 500;
        padding: 0 34px;
        background-color: var(--section-bg);
        color: #ffffff;
        height: 34px;
        display: flex;
        justify-content: space-between;
      }
      .main {
        width: 100%;
        background-color: var(--section-bg);
      }
      section {
        box-sizing: border-box;
        max-width: 700px;
        margin: 0 auto;
        font-size: 18px;
        line-height: 30px;
      }
      section > h1 {
        max-width: 100%;
      }
      section:first-child {
        width: 100%;
        height: 550px;
        padding-top: 200px;
      }
      section:nth-child(2){
        background-color: var(--section-bg);
        padding-bottom: 0;
      }
      section:nth-child(3){
        padding-top: 0;
      }
      a, a:visited {
        font-size: 14px;
        line-height: 33px;
      }
      .sns-share::before {
        content: "";
        display: block;
        margin-top: 7px;
        width: 18px;
        height: 18px;
        background-image: url("images/sns_share.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }
      h1 {
        margin: 0;
        padding: 0;
      }
      h1 span {
        text-align: center;
        display: block;
        font-family: "nJoyStories", serif;
        font-size: 60px;
        font-weight: bold;
        line-height: 0.9;
      }
      h1 span:nth-child(2) {
        font-size: 100px;
      }
      h1 span:nth-child(3) {
        font-size: 170px;
      }
      section:nth-child(n+2){
        color: #ffffff;
      }
      p {
        margin-top: 0;
        text-align: center;
      }
      p:first-child {
        margin-top: 34px;
      }
      .slide-in > blockquote {
        margin: 0;
        text-align: center;
      }
      blockquote, p {
        transform: translateY(20px);
        opacity: 0;
        transition: all 1s ease-in;
      }
      .on {
        transform: translateY(0px);
        opacity: 1;
      }
      section.video {
        position: relative;
        margin: 0;
        padding: 0;
        max-width: 100%;
        height: 550px;
      }
      section > div.video-container {
        width: 100%;
        max-width: 100%;
        height: 550px;
        overflow: hidden;
        position: relative;
        padding: 0;
        margin: 0;
      }
      video {
        left: 50%;
        min-height: 100%;
        min-width: 100%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      @media screen and (max-width: 977px) {
        video {
          min-height: 550px;
          min-width: 978px;
        }
      }
      .video-content {
        position: absolute;
        top: 250px;
        left: 50%;
        transform: translate(-50%, 0);
        margin: 0;
        padding: 0;
        width: 100%;

        background-image: radial-gradient(closest-side, rgba(51,33,12,0.25), rgba(51,33,12,0));
        background-repeat: no-repeat;
        background-position-x: center;
        background-size: 178px 178px;
        background-position-y: 100px;
      }
    </style>
    <div>
      <header class="header">
        <a href="#">아름다운 뉴스</a>
        <a href="#" class="sns-share"><span class="readable-hidden">공유</span></a>
      </header>
      <div class="main">
        <section class="video">
          <div class="video-container">
            <video autoplay muted id="myVideo">
              <source src="images/intro.mp4" type="video/mp4">
            </video>
          </div>
          <div class="video-content">
            <h1>
              <span>인생 2막,</span>
              <span>여자 나이</span>
              <span> 50</span>
            </h1>
          </div>
        </section>
        <section class="slide-in">
          <blockquote>가슴 속에서부터 화가 올라와요.</blockquote>
          <blockquote>갑자기 눈물이 왈칵 나네요.</blockquote>
          <blockquote>지금까지 무엇을 하고 살았는지 모르겠어요.</blockquote>
        </section>
        <section class="slide-in-2">
          <p>폐경을 전후로 신체적, 심리적, 사회적 변화를 겪고 있는</p>
          <p>50세 이상 중년 여성들의 속마음이다.</p>
          <p>엄마, 언니 어쩌면 나의 이야기일 수 밖에 없는 중년 여성의 현재를</p>
          <p>그녀들에게 직접 들어보았다. 혼란과 위기를 느끼고 있는</p>
          <p>중년 여성을 위한 지원 기관 정보도 정리했다.</p>
        </section>
      </div>
    </div>`}}customElements.define("w50-pt0",W50Pt0);class W50Jump extends LitElement{static get properties(){return{href:{type:String},description:{type:String},caption:{type:String},color:{type:String}}}constructor(){super()}render(){return html`
    <style>
      a, a:visited {
        color: ${this.color};
        text-decoration: none;
      }
      a {
        display: block;
        max-width: 724px;
        min-height: 100px;
        margin: 80px auto;
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        font-family: "SPMyungJo", serif;
        font-size: 18px;
        padding-top: 20px;
        padding-bottom: 14px;
        padding-right: 40px;
        padding-left: 40px;
      }
      span {
        display: block;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
      .caption {
        color: white;
        width: 240px;
        height: 40px;
        margin-top: 20px;
        line-height: 40px;
        border-radius: 20px;
        background-color: ${this.color};
      }
    </style>
    <a href="${this.href}">
      <span class="description">${this.description}</span>
      <span class="caption">${this.caption}</span>
    </a>
    `}}customElements.define("w50-jump",W50Jump);class W50Next extends LitElement{static get properties(){return{href:{type:String},num:{type:Number},caption:{type:String},color:{type:String}}}constructor(){super()}render(){return html`
    <style>
      a, a:visited {
        color: black;
        text-decoration: none;
      }
      a {
        box-sizing: border-box;
        display: block;
        max-width: 768px;
        height: 100px;
        margin: 0 auto;
        padding-top: 9px;
        padding-left: 34px;
        background-color: #ffffff;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        font-family: "SPMyungJo", serif;
        font-size: 18px;
        border-bottom-width: 11px;
        border-bottom-style: solid;
        border-bottom-color: ${this.color};
      }
      span {
        display: block;
        font-size: 10px;
      }
      .num, .caption {
        font-size: 18px;
      }
      .num {
        height: 23px;
        display: inline-block;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: black;
      }
    </style>
    <a href="${this.href}">
      <span class="num">0${this.num}</span>
      <span class="caption">${this.caption}</span>
      <span>다음 글 읽기</span>
    </a>
    `}}customElements.define("w50-next",W50Next);class W50Img extends LitElement{static get properties(){return{src:{type:String},figcaption:{type:String},alt:{type:String},desc:{type:String}}}constructor(){super()}onPopup(){const popup=this.shadowRoot.querySelector(".popup");popup.className="popup on"}offPopup(){const popup=this.shadowRoot.querySelector(".popup");popup.className="popup"}render(){return html`
    <style>
      :host {
        width: 100%;
      }
      figure {
        position: relative;
        max-width: 768px;
        margin-left: auto;
        margin-right: auto;
        z-index: 0;
      }
      figure:hover::after {
        content: "";
        background-image: url("images/mag.png");
        background-size: contain;
        display: block;
        position: absolute;
        bottom: 0px;
        right: 20px;
        width: 40px;
        height: 40px;
      }
      img {
        max-width: 100%;
      }      
      figcaption {
        color: #a4a09d;
        text-align: center;
        font-size: 14px;
      }
      figcaption::before {
        content: "<";
      }
      figcaption::after {
        content: ">";
      }
      figure {
        cursor: zoom-in;
      }
      .popup {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: fixed;
        z-index: 9999;
        width: 0;
        height: 100vh;
        background-color: #57433f;
        top: 0;
        right: 0;
        transition: width 0.5s ease-in-out;
      }
      .popup > * {
        align-self: flex-end;
      }
      .popup.on {
        width: 100%;
      }
      .popup * {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }
      .popup.on * {
        opacity: 1;
      }
      .on .btn-close {
        position: absolute;
        width: 22px;
        height: 22px;
        right: 17px;
        top: 17px;
        background-image: url("images/x.png");
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
      }
      .popup img {
        display: block;
        max-width: 768px;
        margin-left: auto;
        margin-right: auto;
      }
      .desc {
        box-sizing: border-box;
        background-color: #33210c;
        position: relative;
        bottom: 0;
        max-width: 768px;
        padding-left: 25px;
        padding-right: 25px;
        margin-left: auto;
        margin-right: auto;
      }
      .desc > * {
        font-family: "NotoSansKR", sans-serif;
        color: white;
        font-size: 16px;
      }

      @media screen and (max-width: 360px) {
        .popup img {
          width: 100%;
        }
        .desc {
          padding-left: 16px;
          padding-right: 16px;
        }
        .desc > * {
          font-size: 11px;
        }
      }
      @media screen and (min-width: 361px) and (max-width: 768px) {
        .popup img {
          width: 100%;
        }
        .desc {
          padding-left: 16px;
          padding-right: 16px;
        }
      }

        
    </style>
    <div class="popup">
      <div class="btn-close" @click="${e=>this.offPopup(e)}"></div>
      <img src="${this.src}" alt="${this.alt}">
      <div class="desc">
        <h3>${this.figcaption}</h3>
        <p>${this.desc}</p>
      </div>
    </div>
    <div>
      <figure @click="${e=>this.onPopup(e)}">
        <picture>
          <img src="${this.src}" alt="${this.alt}">
        </picture>
        <figcaption>${this.figcaption}</figcaption>
      </figure>
    </div>
    `}}customElements.define("w50-img",W50Img);class W50Pt1 extends LitElement{static get properties(){return{isCurrent:{type:Boolean},popupHeight:{type:Number}}}constructor(){super()}onAfterEnter(){scrollTo(0,0)}render(){return html`
    ${SharedStyles}
    <style>
      h1, blockquote {
        color: #669aa7;
      }
      section {
        position: relative;
      }
      .video-wrapper {
        position: relative;
        padding-bottom: 25%;
        padding-top: 100px;
        margin-top: 50px;
        margin-bottom: 50px;
        height: 0;
      }
      .video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <main class="main">
      <section>
        <h1>
          <span class="num">01</span>
          <span class="title">엄마는 아프다</span>
        </h1>
        <figure>
          <picture>
            <img src="images/pt1_intro_pic.png" alt="intro image">
          </picture>
        </figure>
        <p>스웨덴의 심리학자이자 &lt;여자 나이 50&gt;의 저자 퍼트리샤 튜더산달은 여성의 50세를 '성숙한, 나름대로 의의가 있는 인생을 어떻게 살아가야 하는지가 중요한 과제가 되는 나이, 아직 건강과 의욕은 충분함에도 뒤쫓아 오는 젊은 세대에게 길을 양보해야 하는 나이'라고 말한다. 그녀는 책에서 50세에서 노년 직전인 65세까지를 '제 3의 연령(third age)'이라고 정의하고 새로운 생애주기를 맞이하는 것에 대해 설명한다.</p>
        <p>폐경으로 인한 신체적 노화와 함께 자녀의 성장, 퇴직 등으로 가정과 사회 안에서의 입지가 축소되면서 낮아지는 자기 존중감, 임박한 황혼기로 인한 위기감 속에서 늘어난 수명, 불확실한 미래라는 상황과 마주한 시기. 이 혼란기 속에서 더 이상 젊지도, 아직은 늙지도 않은 중년의 여성들은 어떤 현실을 헤치고 있을까?</p>
      </section>
      <section>
        <h2>엄마로 지냈던 시간</h2>
        <p>중년 여성의 마음 속을 떠다니는 '해시태그'는 뭘까? 포털 사이트 네이버에 개설된 중년 여성들의 카페, &lt;우아한 갱년기&gt;(회원수 2978명, 10월 8일 기준)의 게시글을 분석해 도출한 '워드 크라우드'에서 가장 빈번히 눈에 띈 단어는 다음과 같다. '남편, 아이, 아들, 딸, 엄마, 친정' 중년 여성들의 관심사와 고민이 자신을 둘러싼 '관계'에 집중되어 있음을 보여준다. '마음, 맘, 혼자, 걱정' 등으로 정리된 그 다음 화두는 스트레스에 집중되고 있다. 뒤이어 '호르몬, 병원, 기억, 건강' 등 갱년기에 당면한 신체적 변화와 노화에 대한 토로도 눈에 띈다.</p>
        <w50-img src="images/wordcloud1-01.jpg" alt="워드 클라우드" figcaption="그림 1. 워드 크라우드로 드러난 중년의 속마음" desc="네이버 카페 <우아한 중년기> 메뉴 중 '갱년기 증상'과 '4050 대나무숲'의 전체 게시글(2018년 10월 8일 기준) 분석했다. 워드 크라우드로 표현된 것 처럼 게시글에는 '남편, 아이, 아들, 딸, 엄마, 친정'등과 같이 중년 여성을 둘러싼 관계들에 대한 고민이 가장 많으며, 그 다음이 '마음, 맘, 혼자, 걱정'등 스테레스에 대한 토로 그리고 '호르몬, 병원, 기억, 건강'등과 같이 갱년기를 맞이해 당면하는 신체적 고민이 주를 이룬다. "></w50-img>
        <blockquote>두 아이가 모두 대학생이 되고 나니까, 내가 해야 할 일이 감쪽같이 없어진 거예요.</blockquote>
        <p>급격한 노화, 가정 안에서 역할 축소로 인한 고민은 중년기 여성이라면 누구도 예외일 수 없는 공통의 상황이다. 실제로 50-65세의 중년 여성들을 만나 나눈 인터뷰에서 대다수가 자녀의 성장과 독립으로 인해 슬픔, 외로움, 상실감을 겪는 '빈둥지 증후군(empty nest syndrome)'을  호소했다. 일산에 거주하는 김주미(52세, 주부) 씨는 자녀 둘을 모두 대학교에 진학시킨 후 우울감이 찾아왔다고 말한다.</p>
        <p>"결혼과 동시에 직장을 그만 두고 육아와 가사에 전념했어요. 둘째 아이까지 대학에 가기 전까진 자녀 교육에 온 시간과 마음을 쏟았죠. 마치 업무에 매진하는 직장인처럼요. 그럴 수 밖에 없는 게, 아이들이 이룬 성과가 곧 엄마의 성적표였으니까요. 두 아이가 모두 대학생이 되고 나니까, 내가 해야 할 일이 감쪽같이 없어진 거예요. 집안일은 그냥 허드렛일이죠. 거기에 애들은 자기 삶이 생겨서 엄마의 도움을 필요로 하기는커녕, 대화도 잘 안 하려고 하고요. 물론 처음 반 년 정도는 친구들도 자주 만나고 여행도 가고 했죠. 그것도 한계가 있더라고요. 이런 여유를 기꺼이, 잘 즐기는 사람들도 있겠지만, 저는 마냥 그럴 순 없는 성격이거든요. 급기야 나중엔, 잉여 인간이 된 기분마저 들더군요."</p>
        <div class="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fbCpIvBvt2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>아들의 결혼을 앞둔 김혜령(56세, 주부) 씨 역시 자녀와의 관계 변화를 인정해야 한다는 사실을 잘 알고 있지만 마음처럼 쉽지 않다고 토로한다.</p>
        <p>"아들에게 여자친구가 생긴 후부터 매사 서운했어요. 아이가 평일엔 지방 근무를 해서 주말에나 겨우 얼굴을 볼 수 있는데, 연애를 시작한 후엔 그마저도 보기가 어려웠거든요. 모든 스케줄이 여자친구한테 맞춰져 있는 것 같다고 할까? 심지어 엄마가 허리를 다쳐서 병원에 입원했는데도, 밤 늦게 잠깐 와서 얼굴만 비추는 거예요. 감정을 풀어보려고 얘기 좀 하려 하면 자꾸 여자 친구 이야기로 흘러가니까 슬금슬금 대화도 피하고. 관계가 점점 단절되는 거죠. 물론 둘이 잘 만나서, 이제 날짜도 잡고, 결혼 준비도 하고 있어요. 내가 아들을 잘 떠나 보내고, 마음을 비우는 게 맞다는 건 알아요. 그래도 엄마로서 더 해줄 수 있는 일, 아이의 따뜻한 말 한마디 이런 게 아쉬운 건 사실이에요."</p>
      </section>
      <section>
        <h2>갱년기, 그리고 노화</h2>
        <p>폐경으로 인한 신체, 심리적 변화는 50-65세 중년기 여성의 일상을 위협하는 대표적 원인이다. 퍼트리샤 튜더산달은 책의 첫 문장에서 '어느날 갑자기 주름, 건망증, 몸의 노화에 대한 공포가 찾아왔다'는 말로 이 시기 변화에 대한 감정을 대변한다. 서울 라헬 여성의원의 김재원 원장은 중년이 겪는 노화의 징후를 정확히 알고, 자율신경의 부조화로 나타나는 이 증상들을 자연스럽게 인정하며 준비하는 것이 필요하다고 이야기한다.</p>
        <p>"폐경이 오는 평균 연령은 만 50세 입니다. 폐경 전후로 안면홍조, 가슴이 두근거리는 증상, 식은땀 등의 갱년기 증상, 불안과 우울, 수면장애, 기억력 저하 등의 정신적 증상이 나타날 수 있습니다. 동시에 고혈압, 고지혈증, 골다공증 등의 질환 유병률도 높아집니다. 또 50대 이상이 되면 이전보다 비만율도 현저하게 높아집니다."</p>
        <blockquote>40대 때부터 등산을 즐기면서 체력 관리를 잘 하고 있다고 생각했어요. 그런데도 50대가 되니까 거짓말처럼 몸이 여기저기 아프기 시작하더라고요.</blockquote>
        <p>보험 회사에 근무하는 김정순 씨(회사원, 52세)는 평소 꾸준한 운동으로 건강을 관리했음에도 갱년기에 일어나는 신체적 변화를 받아들이는데 어려움이 있다고 말한다. "40대 때부터 등산을 즐기면서 체력 관리를 잘 하고 있다고 생각했어요. 그런데도 50대가 되니까 거짓말처럼 몸이 여기저기 아프기 시작하더라고요. 결혼 후에도 계속 일을 하고 있는 터라 스마트폰 사용이나 인터넷 검색 등에 또래보다 좀 더 익숙했었는데 이젠 이것조차 예전 같지 않아요. 새로 나온 어플리케이션 사용법이나 스마트폰 기능 등을 익혔다가도 자꾸 까먹어서 아들에게 물어보면, '엄마 예전엔 안 그랬는데 왜 자꾸 똑같은 걸 물어보냐.'고 타박하는데, 마음이 좋지 않더라고요. 그래서 아이한테 엄마가 갱년기에 겪고 있는 일들, 상황을 알려주고 '네 이해와 배려가 필요하다.'고 얘기해줬어요."</p>
        <p>김재원 원장은 중년기에 특히 유의해야 할 건강 관리도 잊지 말라고 당부한다. 갱년기, 폐경기 이후 유병율이 높아지는 자궁내막암의 유병률이 점차 증가하고 있기 매년 골반초음파 검사를 실시하는 것이 필요하다고. "특히 폐경 이후 질출혈 증상이 있으면 반드시 검사를 받아야 합니다. 골반초음파를 통해 난소종양, 난소암에 대한 검진도 가능합니다. 또 골다공증검사도 정기적으로 받는 것이 좋습니다."</p>
        <blockquote>오히려 지금이 아이들이 한창 컸던 30-40대 때보다 더 많은 돈이 필요한 것 같아요.</blockquote>
        <p>저성장, 고령화 시대에 퇴직은 앞당겨지고, 취업, 결혼, 자립이 늦어지는 자녀와 부모 부양을 위한 경제적 부담은 증가한 것도 중년 여성들을 힘들게 한다. 일산에 거주하는 유혜수(53세, 자영업) 씨가 은퇴를 고려할 시기에 스트레스와 부담감을 안고 새로운 사업을 시작한 이유도 여기에 있다. "요즘 세대들은 바늘 구멍을 뚫고 취업을 해도, 현실적으로 홀로 서기가 어려운 상황이잖아요. 아무리 월급을 꾸준히 모아도 집 한 채 살 돈조차 모으기 힘든 게 현실이니까. 남편도 저도 건강이 썩 좋은 상황은 아니지만 우리 노후보단 아이들의 미래를 위해 가족 사업을 시작했어요. 설상가상으로 친정 어머니가 병환으로 요양원에 계시는데, 그 병원비를 감당하는 것도 만만치 않고요. 오히려 지금 아이들이 한창 크는 30-40대 때 보다 더 많은 돈이 필요한 것 같아요."</p>
        <p>정신의학 전문의 박종석 원장은 독립기 자녀와의 관계 단절로 인해 허무함, 공허함 등을 느끼는 빈둥지 증후군을 극복하는 법에 대해 다음과 같은 방법을 알려준다. "우울감을 호소하는 대부분의 50대 중년 여성의 대부분은 급격하게 일어나는 변화를 생의 새로운 전환점으로 받아들이는 대신 스트레스를 유발 요소로 인식합니다. 또 자녀가 성인으로서 책임감을 가질 준비가 돼있지 않다고 생각할수록 더 깊은 우울감을 느끼기도 합니다. 이런 경우 자녀와의 감정적 분리가 우선적으로 필요합니다. 엄마로서의 삶 이외에 중년기, 노년기에 하고 싶은 일, 삶의 버킷 리스트 등을 반드시 만들어야 하며, 이를 위한 단기 계획, 장기 계획을 세워 하나씩 실천해나가야 합니다."</p>
        <w50-jump href="/pt3/rosenberg" color="#e5ae0e" description="로젠버그의 자기존중감 테스트로 나를 들여다 보세요" caption="테스트 하러가기"></w50-jump>
        <p>박종석 원장은 갱년기의 스트레스, 불안을 공유할 수 있는 또래 집단과의 커뮤니티 활동을 통해 부정적인 감정을 바로 바로 해소하는 것도 중요하다고 말한다. 특히 기분 장애의 대표질환인 우울증 평생 유병율이 남성보다 2배 이상 더 높은 여성의 경우 (보건 복지부가 시행한 2016년도 정신질환실태 역학조사 결과는 남성은 3% 여성은 6.9%였다) 이러한 감정에 좀 더 기민하게 응할 필요가 있다. "자녀 양육과 가사에 매진한 전업 주부의 경우 마치 정년 퇴임한 가장처럼 '이제 내가 뭘 하며 살아야 하지?'라는 의문에서 오는 고독감, 가정에서 내 역할이 사라졌다는 상실감 등으로 우울감을 느끼게 됩니다. 이 감정이 일시적이라면 약 6개월 정도 안에 자신의 새로운 관심사, 일, 취미 등을 찾아 조금씩 자연스럽게 극복할 수 있습니다. 만약 우울감이 1년 이상 지속되거나 잠을 잘 못자고 아무것도 하고 싶지 않을 정도로 무기력하다면 상담센터나 병원을 찾아 전문가의 진단을 받아보는 것이 필요합니다."</p>
      </section>
      <section>
        <p>늙어간다는 사실, 그것이 야기하는 불안과 우울감, 그로 인해 위협 받는 자아존중감을 회복하는 열쇠는 결국 본인 자신에게 있다. 여성이라면 필연적으로 겪어야 할 생애 주기에 따른 변화를 받아들이고 스스로, 혹은 주변의 도움과 함께 극복해야 한다. 특히 현대 사회엔 기대 수명 연장으로 여성이 자신의 삶의 무려 1/3에 해당하는 기간을 갱년기로 보내고 있다. 자신의 정신 건강 관리가 개인적 측면을 넘어 사회적으로도 중요한 사안이라는 뜻이다.</p>
      </section>
    </main>
    <footer class="footer">
      <w50-next href="/pt2" num="2" caption="내 자리가 없다" color="#d4644a"></w50-next>
    </footer>
    `}}customElements.define("w50-pt1",W50Pt1);class W50Pt2 extends LitElement{static get properties(){return{isCurrent:{type:Boolean}}}constructor(){super()}onAfterEnter(){scrollTo(0,0)}render(){return html`
    ${SharedStyles}
    <style>
    h1, blockquote {
      color: #d4644a;
    }    
    section {
      position: relative;
    }
    .video-wrapper {
      position: relative;
      padding-bottom: 25%;
      padding-top: 100px;
      margin-top: 50px;
      margin-bottom: 50px;
      height: 0;
    }
    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    </style>
    <main class="main">
      <section>
        <h1>
          <span class="num">02</span>
          <span class="title">내 자리가 없다</span>
        </h1>
        <figure>
          <picture>
            <img src="images/pt2_intro_pic.png" alt="intro image">
          </picture>
        </figure>
        <p>실업 급여를 받으며 구직 활동을 하고 있는 유선화(61세, 주부)씨는 최근 지역고용센터로부터 여성일자리 구인구직 박람회 안내 문자 한 통을 받았다. 참여 업체의 채용 직종을 살펴보니 택배 준비원, 온라인 판매원, 가사 도우미 등이 목록의 대부분을 차지하고 있었다. "퇴직 전 자율학습교사로 10년 가까이 일했었어요. 아직 일할 나이라고 생각해 구직 활동을 하고 있지만, 중년 여성을 위한 직업의 선택폭이 좁고 한정적인 점이 아쉽습니다."</p>
        <p>통계청 인구센서스 발표 자료에 따르면 50세~64세 중년 여성 인구는 2000년 약 316만 명에서 2015년 약 542만 명으로 큰 증가를 보이고 있다. 여성의 고용 성장율은 인구 성장율보다 더 높다. 55세~64세 여성 중 취업 상태에 있는 인구 수는 2000년 약 159만 명에서 2015년 315만 명으로 꾸준히 증가했다. 고용율의 호전과 달리 고용의 질은 낙관적이지 않다. 50~59세 여성들의 직종별 고용 분포를 살펴보면 여성의 노동 인구의 절반이 단순 노무직(23.8%)과 서비스직(22.7%)에 집중되어 있는 것이 현실. 사무직 종사자의 경우 13.8%로 23.9%로 집계된 남성의 절반 수준에 불과하다. 관리자의 경우는 더 현저한 차이를 보인다. 남성의 고용 분포율이 5.2%를 기록한 반면 여성은 고작 0.8%에 그치고 있다.</p>
        <div><w50-img src="images/graph1.jpg" alt="graph1" figcaption="표 1. 50세~64세 중년 여성 인구 및 고용현황(2000년~2015년)" desc="통계청에서 5년마다 실시하는 인구센서스 발표 자료에 따르면 50세에서 64세의 중년 여성은2000년 약 316만명에서 20015년 약 542만명으로 큰 폭으로 증가했음을 알 수 있다. 취업 상태에 있는 고용 인구 수도 2000년 약 159만명에서 2015년 약 315만명으로 성장했다."></w50-img></div>
        <div><w50-img src="images/graph2.jpg" alt="graph2" figcaption="표 2. 50세~59세 중년기 여성과 남성의 직종별 고용상황 비교(2017년 기준)" desc="고용노동부가 고용형태별근로실태조사에서 조사한 50~59세 중년 여성의 직종별 고용 분포를 살펴보면 단순노무직 23.8%과 서비스직 22.7%에 집중되어 있는 것으로 나타난다. 이는 단순노무직 7.35%, 서비스직 1.51%인 남성과 비교해 큰 차이를 보이고 있다. 사무 종사자의 경우 여성은 13.8%로 집계된 반면 남성은 23.9%로 남성의 절반 정도 수준이며, 관리자는 여성의 경우 0.8%인 반면 남성은 5.2%로 남성 대비 매우 낮은 수준으로 나타났다."></w50-img></div>
      </section>
      <section>
        <h2>유리천장은 현실</h2>
        <p>중년의 시기에 사회적, 직업적인 하강과 은퇴를 감지하는 것은 자연스러운 수순이지만 여성이 맞닥뜨리는 현실은 남성보다 좀 더 어둡다. 컨설팅 그룹에서 일하다가 이직을 준비 중인 이은성(52세, 데이터 마이닝 & 컨설팅 전문가) 씨는 여성이 남성보다 직업적 하강을 좀 더 빨리 느낄 수 밖에 없다고 말한다.</p>
        <p>"40대 후반에서 50대 초반, 직장 안에서 관리자, 임원, 경영진의 역할을 하게 되죠. 그 전엔 실무를 담당하기 때문에 경험, 노련함으로 입지를 다질 수 있어요. 그런데 여성이 그 단계를 넘어 회사의 운영, 경영에 참여하는 자리에 올라가면 동료, 상사가 대부분 남성인 상황이에요. 이 직무에선 실무적 역할 보다는 상사와의 '케미스트리'를 맞춰 의사 결정을 하고 일을 추진하는 것이 요구되는 직무 능력이죠. 충성심도 중요하고요. 그런데 여성 임원들은 우선 남성 상사와의 교감, 교류 등에서부터 어려움을 겪어요. 남성이 선호하는 커뮤니케이션 방식, 예를 들어 골프나 등산 같은 레저, 스포츠 활동에 참여가 어렵다 보니 남성보다 상대적으로 퍼포먼스가 자꾸 떨어지게 돼요. '내 능력이 부족한가?'하는 회의감까지 들기도 하고요. 그 밖에 여성 임원을 주요 분야보다는 신규 사업을 전개하는 데 필요한 '스페어 임원'으로 뽑는다든가, 리스크가 높은 일에 배정하는 경우도 왕왕 있어요."</p>
        <div class="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SXJaei1Fv2M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <blockquote>여성은 적극적으로 자신의 의사를 표현하지 않으면 '그냥 저 정도 선에서 은퇴하겠지'라고 바라보는 시각이 있어요.</blockquote>
        <p>외국계 기업의 경우 남성 중심의 업무 문화, 경력 설계, 보상 체계에서 국내 기업보다는 비교적 유연하지만 중년 여성 임원에 대한 고정 관념은 여전히 존재하는 것이 사실. 정은영 (49, 금융계기업 커뮤니케이션 이사) 씨는 여성을 향한 직장 편견 등이 아쉽다고 말한다.</p>
        <p>"같은 직위라도 남성은 '당연히' 경영진으로 승진하는 등의 '야망'을 가진 존재로 대우받지만 여성은 적극적으로 자신의 의사를 표현하지 않으면 '그냥 저 정도 선에서 은퇴하겠지'라고 바라보는 시각이 있어요. 또는 '여자는 자기 일만 하다가 퇴근시간 되면 그냥 집으로 가버리는 직장인'으로 바라보는 편견도 엄연히 존재하고요. 여성이 자신의 능력으로 이사회의 구성원으로 승진해도, 재무나 영업 등 기업의 주요 분야보다는 홍보, 마케팅, 법무 등 지원 분야에 한정되는 경우가 많은 것도 사실이에요."</p>
        <blockquote>국가가 5백만 명이 넘는 중년기 여성들을 '인력'으로 활용하지 않는 건 매우 큰 손실이라고 생각해요.</blockquote>
        <p>은퇴, 경력 단절 등으로 사회 생활을 멈췄다가 다시 직업 활동을 시작하려는 중년 여성들에겐 문이 더 좁다. 유선화 씨는 '엄마는 그냥 집에서 살림하고, 손주나 봐주면 되는 존재'로 보는 가족, 사회의 시선부터 바뀌어야 한다고 말한다. "국가가 5백만 명이 넘는 중년기 여성들을 '인력'으로 활용하지 않는 건 매우 큰 손실이라고 생각해요. 물론 일을 처리하는 속도나 능률이 젊은 사람들보다 낮겠지만, 경험과 연륜에서 비롯된 지혜, 노하우 등은 아주 유용한 자원 아닐까요? 그리고 50대 이상 여성들을 위한 재교육, 취업 지원 센터 같은 기관, 정책이 지금보다 훨씬 더 많아졌으면 좋겠어요. 특히 중년 여성들 중엔 인터넷 활용 능력이 떨어지는 이들도 많기 때문에 그러한 정책, 제도에 접근하는 루트를 더 쉽게 만들 필요도 있어요. 서울시의 '다산 콜센터'처럼 전화 한 통으로 물어볼 수 있거나 구청, 동사무소와 같은 소규모 단위 기관에서 지역의 50대 이상 세대들을 밀착 관리 하는 식으로요."</p>
      </section>
      <section>
        <h2>중년기를 위한 지원이 필요</h2>
        <p>중년 세대가 몸과 마음, 가정과 사회 내 지위 등에 있어 겪는 큰 폭의 변화와 그에 따른 문제의 심각성에 반해 이 세대를 향한 사회적 관심은 미미하다. 생애 주기에서 청소년, 30, 40대의 위기, 노년에 관해서는 많은 책과 연구, 정책 등이 나와있지만 50-65세 중년기에 대한 연구와 콘텐츠, 정책은 그에 비해 현저히 부족한 것이 현실. 인터뷰를 위해 만난 대부분의 취재원들은 중년 세대를 위한 커뮤니티 센터, 유아, 노인 등 교육과 케어가 필요한 세대와 중년 세대의 인력을 연결하는 소단위 '생활 공동체' 등이 필요하다고 입을 모은다.</p>
        <p>정은영 씨는 중년 여성들이 연금 수령이 시작되는 65세가 되기 전, 서서히 은퇴할 수 있는 시스템이 필요하다는 의견을 제안한다. 이를 실현하기 위해 동종 업계의 비슷한 연령, 직위, 상황 등을 가진 동료들과 네트워킹을 활발히 할 필요가 있다고. 박종석 정신의학 전문의는 이러한 네트워킹을 통해 중년 여성들이 은퇴 후에도 업계의 재직자를 위한 멘토링을 해주는 것이 사회적 자존감을 회복할 수 있는 좋은 방법이라고 귀띔한다.</p>
        <blockquote>엄마라는 공통점을 주축으로 여성이 자존감과 정체성을 회복하고, 각자의 경험과 역량을 교환하는 연대가 있었으면 좋겠어요.</blockquote>
        <p>서울시 50플러스 재단은 중년 이후의 세대가 이러한 '네트워킹'을 비롯해 재취업, 교육, 일자리 연결, 상담, 커뮤니티 활동 등을 지원받을 수 있는 복합 공간. &lt;엄마 난중 일기&gt;의 저자 김정은 씨는 50플러스 재단의 도움을 통해 '엄마학교협동조합'을 만들었다.</p>
        <p>"남성의 경우, 자기계발을 통해 사회적으로 인정받는 지위와 직업을 갖추는 것이 안정된 가정을 이루는 아빠가 되는 길과 크게 다르지 않아요. 이와 달리 여성은 엄마가 되기 위해 자신이 가진 것을 대부분 포기해야 하는 경우가 많아요. 자신의 삶과 가정을 동시에 유지하기 어려운 여성이 개인주의적 문화가 팽배한 현대 사회에서 '엄마'라는 이름으로 살아가기가 점점 어려워지고 있어요. 사람을 낳고, 키우고 관계를 조절하는 '엄마'라는 공통점을 주축으로 여성이 자존감과 정체성을 회복하고, 각자의 경험과 역량을 교환하는 연대가 있었으면 좋겠다고 생각해 '엄마학교협동조합'을 시작하게 됐습니다."</p>
        <p>엄마학교협동조합에선 50플러스 세대를 위한 프로그램, 커뮤니티를 활발하게 운영 중이다. 성인이 된 자녀와의 관계 전환을 위한 '2050 소통 여행' 엄마의 이모작 인생 설계를 위한 '빈둥지 리노베이션(엄마 독립지도 그리기)' 등이 대표적. 매달 엄마들의 '소셜다이닝 이야기파티'를 통해 엄마들의 네트워킹도 진행하고 있다.</p>
        <p>"가족에게 의존하거나 간섭, 지배하려는 엄마의 모습을 지양하고, 건설적인 자기계발 로드맵을 설계해 새로운 관계를 만들고 평화적인 공존을 모색할 수 있도록 동기를 부여하는 것이 엄마학교협동조합의 지향입니다." 김정은 대표의 말이다.</p>
        <blockquote>할 수 있는 것 중에 찾아라. 상황에 대한 자신의 반응에 주목하라. 컨트롤 할 수 없는 상황에 대해 불평하느라 인생을 낭비하지 말라</blockquote>
        <p>50세 이후 세대를 위한 연구와 정책 계발은 세계적으로도 큰 관심사다. 미국의 '플러스 50 이니셔티브(Plus 50 Initiative)'는 지역 곳곳에 있는 2년제 교육기관인 커뮤니티 컬리지를 통해 중년 이후 세대의 재교육 취업을 지원하는 사업이다. 특히 교육, 건강, 사회사업 등 중년 세대에게 적합한 분야를 선별해 프로그램 운영하고 있다.</p>
        <p>1970년 대부터 고령화 현상에 대비한 일본에선 은퇴 세대의 사회 참여로 건강, 복지까지 해결 '삶의 보람 취업사업'이 주목 받고 있다. 은퇴자가 농업, 먹거리, 육아, 생활지원, 복지 등의 분야에서 취업 할 수 있는 기회를 연결하는 시스템이다. 중년과 노년 세대가 개인적으로는 삶의 보람을 느끼고, 사회적으로는 지역의 문제 해결에 기여할 수 있다는 점에서 효율적인 정책으로 평가 받고 있다.</p>
        <p>영국은 이 세대를 위한 정책이 가장 적극적으로 시행되는 나라 중 하나다. 지난 2011년 65세로 정해져 있던 법정 퇴직 연령을 폐지 한 것부터 시작된다. 2014년엔 50세 이상 노동자들이 더 길게, 더 오래 일하도록 지원하는 정책 풀러 워킹 라이브스(Fuller Working Lives)를 발표하고, 고령 구직자의 재취업을 적극 지원하는 50플러스 워크스(50 Plus Works) 등의 시스템을 가동하는 등 세밀하고 촘촘한 정책을 펼치고 있다. 민간 차원에서 진행하는 중년 여성을 위한 프로그램도 탄탄하다. 우먼 리터너즈(Women Returners)는 2~15년 이상 경력 단절을 겪고 있는 여성의 노동 시장 복귀를 돕는 민간 단체. 또 많은 기업들이 경력 단절 여성을 위한 리턴십(Returnship) 프로그램 운영하고 있다.</p>
        <w50-jump href="/pt3/search" color="#e5ae0e" description="중년의 어려움 함께 해결해요 전국 시군구별 사회, 의료 서비스" caption="서비스 보러가기"></w50-jump>
      </section>
      <section>
        <p>이러한 흐름들은 중년 여성들 자신이 '나이'와 생애 주기, 세대에 관한 고정 관념을 스스로 깰 필요가 있다는 사실을 일깨운다. 여성 자신이 50대를 인생의 하향 곡선이 시작되는 나이가 아니라 상승 곡선을 그릴 수 있는 역량이 충분한 나이라고 생각해야 한다. 트렌드 분석가이자 미래연구자 송은주 박사는 인식의 전환을 위해 '중년'이라는 부정적 이미지의 단어 대신 '후기 청년'이라는 새로운 명칭을 만들어 제시한다. 그녀는 저서 &lt;4050 후기 청년&gt;에서 새로운 인생을 찾는 중년을 위해 리더십 전문가 스튜어트 프리드만 박사의 메시지를 다음과 같이 전했다.</p>
        <p>'할 수 있는 것 중에 찾아라. 상황에 대한 자신의 반응에 주목하라. 컨트롤 할 수 없는 상황에 대해 불평하느라 인생을 낭비하지 말라'</p>
      </section>
    </main>
    <footer class="footer">
      <w50-next href="/pt3" num="3" caption="중년 여성을 위하여" color="#e5ae0e"></w50-next>
    </footer>`}}customElements.define("w50-pt2",W50Pt2);customElements.define("w50-rosen",class extends LitElement{constructor(){super()}validRosen(){const result=this.shadowRoot.querySelector(".result"),res=this.shadowRoot.querySelectorAll(".res"),numOfFields=this.shadowRoot.querySelectorAll(".rosenberg-field").length;let answers=0;const unchecked=[];result.className="result";for(let i=0;i<res.length;i++){res[i].className="res"}for(let i=1;i<=numOfFields;i++){let current=this.shadowRoot.querySelectorAll(`[name=q${i}]`),currentVal=0;for(let j=0;j<current.length;j++){if(current[j].checked){currentVal=parseInt(current[j].value,10);answers+=currentVal;j=current.length}}if(!currentVal){unchecked.push(current)}}console.log(answers);console.log(unchecked.length);if(!unchecked.length){result.className="result show";if(29>=answers){res[0].className="res show"}else if(29<answers&&36>=answers){res[1].className="res show"}else if(36<answers&&44>=answers){res[2].className="res show"}else if(44<answers){res[3].className="res show"}}}render(){return html`
    <style>
      :host {
        box-sizing: border-box;
        display: block;
        max-width: 726px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        margin-bottom: 60px;
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      h3, h4, p {
        color: #e5ae0e;
        font-family: "SPMyungJo", serif;
        margin-left: 38px;
        margin-right: 38px;
      }
      h3 {
        font-size: 26px;
      }
      h4 {
        font-size: 18px;
        text-align: center;
        background-image: linear-gradient(to bottom, white, white 12px, #e5ae0e 12px, #e5ae0e 15px, white 15px, white);
        margin-bottom: 10px;
      }
      h4 > span {
        display: inline-block;
        width: 60px;
        background: white;
      }
      p {
        font-size: 18px;
      }
      p.eleven{
        margin-bottom: 56px;
      }
      legend {
        display: block;
        font-family: "NotoSansKR", sans-serif;
        font-size: 17px;
        margin-left: 38px;
        margin-bottom: 6px;
      }
      fieldset {
        border: 0;
        padding: 0 0 0 0;
        margin: 0;
        min-width: 0;
      }
      .radio-group {
        display: flex;
        justify-content: space-around;
        background-color: #f7f6f4;
        padding-left: 70px;
        padding-right: 70px;
        margin-bottom: 20px;
      }
      @media screen and (min-width: 361px) and (max-width: 768px){
        .radio-group {
          padding-left: 40px;
          padding-right: 40px;
        }
      }
      @media screen and (max-width: 360px){
        .radio-group {
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      label {
        display: block;
        height: 72px;
        width: 70px;
        font-size: 11px;
        text-align: center;
      }
      .container {
        display: block;
        position: relative;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 11px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding-top: 38px;
        box-sizing: border-box;
      }

      /* Hide the browser's default radio button */
      .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      /* Create a custom radio button */
      .checkmark {
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translateX(-50%);
        height: 20px;
        width: 20px;
        background-color: transparent;
        border-radius: 50%;
        border: 2px solid gray;
      }

      /* On mouse-over, add a grey background color */
      .container:hover input ~ .checkmark {
        background-color: #ccc;
      }

      /* When the radio button is checked, add a blue background */
      .container input:checked ~ .checkmark {
        background-color: #e5ae0e;
      }

      /* Create the indicator (the dot/circle - hidden when not checked) */
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      /* Show the indicator (dot/circle) when checked */
      .container input:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the indicator (dot/circle) */
      .container .checkmark:after {
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: #181818;
      }

      .button {
        max-width: 640px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 75px;
        margin-bottom: 60px;
      }
      button {
        display: block;
        background: rgba(249,212,103,0.30);
        border: 1px solid #F9D467;
        border-radius: 10px;
        font-size: 17px;
        color: #000000;
        letter-spacing: 0.5px;
        text-align: center;
        width: 100%;
        height: 54px;
      }
      div.info p {
        color: #b3a090;
        font-family: "NotoSansKR", sans-serif;
        font-size: 16px;
      }
      div.result {
        margin-bottom: 60px;
      }
      div.result p {
        color: black;
        font-family: "NotoSansKR", sans-serif;
        font-size: 16px;
        padding: 20px;
        background-color: #f7f6f4;
        border-radius: 10px;
      }
      div.result h3 {
        font-size: 24px;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 40px;
      }
      div.result, div.res {
        display: none;
      }
      div.result.show, div.res.show {
        display: block;
      }

      
      @media screen and (max-width: 360px) {
        :host {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        #rosenberg-form {
          padding-top: 30px;
        }
        div.info {
          padding-bottom: 30px;
        }
        h3, h4, p {
          margin-left: 20px;
          margin-right: 20px;
        }
        legend {
          margin-left: 10px;
        }
        .button {
          margin-left: 20px;
          margin-right: 20px;
        }
      }
      </style>
    <div id="rosenberg-form" class="survey-form">
      <h3><span>로젠버그(Rosenberg)의</span><br /><span>자기존중감검사</span></h3>
      <p>자기존중감(self-esteem)이란 자기개념의 하나로서 자기 자신에 대한 긍정적인 평가, 자기수용 및 자기존중의 정도를 보여주는 개념입니다.</p>
      <p class="eleven">[11문항] 아래 문항을 잘 읽고 자신의 모습에 해당되는 답안을 하나 선택하여 체크하시기 바랍니다.</p>
      <fieldset class="rosenberg-field">
        <legend>1. 대체로 나 자신에 만족하고 있다.</legend>
        <div class="radio-group">
          <label class="container" for="q1-1"><input type="radio" id="q1-1" value="1" name="q1" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q1-2"><input type="radio" id="q1-2" value="2" name="q1" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q1-3"><input type="radio" id="q1-3" value="3" name="q1" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q1-4"><input type="radio" id="q1-4" value="4" name="q1" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q1-5"><input type="radio" id="q1-5" value="5" name="q1" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>2. 떄떄로 내가 무능하다는 생각이 든다.</legend>
        <div class="radio-group">
          <label class="container" for="q2-1"><input type="radio" id="q2-1" value="5" name="q2" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q2-2"><input type="radio" id="q2-2" value="4" name="q2" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q2-3"><input type="radio" id="q2-3" value="3" name="q2" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q2-4"><input type="radio" id="q2-4" value="2" name="q2" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q2-5"><input type="radio" id="q2-5" value="1" name="q2" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>3. 가끔 내가 아닌 다른 사람이었으면 하는 생각이 든다.</legend>
        <div class="radio-group">
          <label class="container" for="q3-1"><input type="radio" id="q3-1" value="5" name="q3" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q3-2"><input type="radio" id="q3-2" value="4" name="q3" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q3-3"><input type="radio" id="q3-3" value="3" name="q3" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q3-4"><input type="radio" id="q3-4" value="2" name="q3" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q3-5"><input type="radio" id="q3-5" value="1" name="q3" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>4. 나를 제대로 이해해주는 사람이 별로 없는것 같다.</legend>
        <div class="radio-group">
          <label class="container" for="q4-1"><input type="radio" id="q4-1" value="5" name="q4" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q4-2"><input type="radio" id="q4-2" value="4" name="q4" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q4-3"><input type="radio" id="q4-3" value="3" name="q4" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q4-4"><input type="radio" id="q4-4" value="2" name="q4" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q4-5"><input type="radio" id="q4-5" value="1" name="q4" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>5. 나에게도 몇가지 좋은 점이 있다.</legend>
        <div class="radio-group">
          <label class="container" for="q5-1"><input type="radio" id="q5-1" value="1" name="q5" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q5-2"><input type="radio" id="q5-2" value="2" name="q5" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q5-3"><input type="radio" id="q5-3" value="3" name="q5" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q5-4"><input type="radio" id="q5-4" value="4" name="q5" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q5-5"><input type="radio" id="q5-5" value="5" name="q5" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>6. 내게는 자랑할 만한 점이 별로 없다.</legend>
        <div class="radio-group">
          <label class="container" for="q6-1"><input type="radio" id="q6-1" value="5" name="q6" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q6-2"><input type="radio" id="q6-2" value="4" name="q6" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q6-3"><input type="radio" id="q6-3" value="3" name="q6" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q6-4"><input type="radio" id="q6-4" value="2" name="q6" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q6-5"><input type="radio" id="q6-5" value="1" name="q6" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>7. 때때로 내가 아주 쓸모없는 사람이라는 생각이 든다.</legend>
        <div class="radio-group">
          <label class="container" for="q7-1"><input type="radio" id="q7-1" value="5" name="q7" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q7-2"><input type="radio" id="q7-2" value="4" name="q7" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q7-3"><input type="radio" id="q7-3" value="3" name="q7" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q7-4"><input type="radio" id="q7-4" value="2" name="q7" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q7-5"><input type="radio" id="q7-5" value="1" name="q7" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>8. 내 자신에 대해 긍정적인 생각을 갖고 있다.</legend>
        <div class="radio-group">
          <label class="container" for="q8-1"><input type="radio" id="q8-1" value="1" name="q8" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q8-2"><input type="radio" id="q8-2" value="2" name="q8" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q8-3"><input type="radio" id="q8-3" value="3" name="q8" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q8-4"><input type="radio" id="q8-4" value="4" name="q8" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q8-5"><input type="radio" id="q8-5" value="5" name="q8" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>9. 내 인생을 전반적으로 보면 실패한 것 같다.</legend>
        <div class="radio-group">
          <label class="container" for="q9-1"><input type="radio" id="q9-1" value="5" name="q9" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q9-2"><input type="radio" id="q9-2" value="4" name="q9" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q9-3"><input type="radio" id="q9-3" value="3" name="q9" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q9-4"><input type="radio" id="q9-4" value="2" name="q9" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q9-5"><input type="radio" id="q9-5" value="1" name="q9" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>10. 가끔 내가 불안하다는 생각이 든다.</legend>
        <div class="radio-group">
          <label class="container" for="q10-1"><input type="radio" id="q10-1" value="5" name="q10" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q10-2"><input type="radio" id="q10-2" value="4" name="q10" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q10-3"><input type="radio" id="q10-3" value="3" name="q10" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q10-4"><input type="radio" id="q10-4" value="2" name="q10" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q10-5"><input type="radio" id="q10-5" value="1" name="q10" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
      <fieldset class="rosenberg-field">
        <legend>11. 나보다 능력있는 사람이 많은 것 같다.</legend>
        <div class="radio-group">
          <label class="container" for="q11-1"><input type="radio" id="q11-1" value="5" name="q11" /><span class="checkmark"></span>전혀<br />그렇지 않다</label>
          <label class="container" for="q11-2"><input type="radio" id="q11-2" value="4" name="q11" /><span class="checkmark"></span>별로<br />그렇지 않다</label>
          <label class="container" for="q11-3"><input type="radio" id="q11-3" value="3" name="q11" /><span class="checkmark"></span>중간<br />정도이다</label>
          <label class="container" for="q11-4"><input type="radio" id="q11-4" value="2" name="q11" /><span class="checkmark"></span>약간<br />그렇다</label>
          <label class="container" for="q11-5"><input type="radio" id="q11-5" value="1" name="q11" /><span class="checkmark"></span>매우<br />그렇다</label>
        </div>
      </fieldset>
    </div>
    <div class="button"><button @click="${e=>this.validRosen(e)}">결과 확인하기</button></div>
    <div class="result">
      <h4>
        <span>결과</span>
      </h4>
      <div id="res-1" class="res">
        <h3>자기 존중감이 다소 낮은 편</h3>
        <p>당신은 부정적인 자기개념을 갖고 있으며 자기존중감이 다소 낮은 편입니다.<br />전문가와의 상담을 통해 정확한 평가를 받아보는 것이 좋습니다.</p>
      </div>
      <div id="res-2" class="res">
        <h3>보통 수준의 자기존중감</h3>
        <p>보통 수준의 자기존중감을 갖고 있습니다.<br />좀 더 자신을 자랑스럽게 여겨보세요.</p>
      </div>
      <div id="res-3" class="res">
        <h3>높은 자기존중감</h3>
        <p>당신은 긍정적인 자기개념을 갖고 있으며, 자기존중감이 높은 편입니다.<br />항상 긍정적인 마음을 가지세요.</p>
      </div>
      <div id="res-4" class="res">
        <h3>매우 높은 자기존중감</h3>
        <p>당신은 매우 긍정적인 자기개념을 갖고 있으며,<br />매우 높은 수준의 자기존중감을 갖고 있습니다.</p>
      </div>
    </div>
    <div class="info">
      <p>※서울사이버대학교 심리상담센터에서 제공한 자기존중감검사입니다. 더 자세한 정보는 http://cec.iscu.ac.kr 을 통해 알아보세요.</p>
    </div>
    `}});class W50Search extends LitElement{static get properties(){return{db:{type:Array},slct2:{type:String}}}constructor(){super();this.db={seoul:{"seong-dong":[{name:"\uC131\uB3D9\uC5EC\uC131\uC778\uB825\uAC1C\uBC1C\uC13C\uD130",address:"\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC131\uB3D9\uAD6C \uBB34\uD559\uB85C2\uAE38 54",tel:"02-3395-1500",web:"http://sd.seoulwomanup.or.kr/",desc:"\uAD6D/\uC2DC\uBE44 \uC9C0\uC6D0\uD504\uB85C\uADF8\uB7A8 (\uB0B4\uC77C\uBC30\uC6C0\uCE74\uB4DC\uC81C, \uC7AC\uC9C1\uC790 \uD6C8\uB828, \uC11C\uC6B8\uC2DC \uC9C0\uC6D0\uC0AC\uC5C5, \uC5EC\uC131\uAC00\uC871\uBD80 \uC9C0\uC6D0\uC0AC\uC5C5, \uAE30\uD0C0 \uC9C0\uC6D0 \uC9C1\uC5C5\uD6C8\uB828), \uC9C1\uC5C5\uAD50\uC721, \uC0DD\uD65C\uBB38\uD654 \uB4F1\uC758 \uC0AC\uC5C5 \uC9C4\uD589."},{name:"\uC131\uB3D9\uAD6C\uC815\uC2E0\uAC74\uAC15\uBCF5\uC9C0\uC13C\uD130",address:"\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC131\uB3D9\uAD6C \uAE08\uD638\uB85C 114",tel:"02-2298-1080",web:"http://www.mindcare.or.kr/",desc:"\uB9CC\uC131\uC815\uC2E0\uC7A5\uC560\uC778\uAD00\uB9AC\uC0AC\uC5C5, \uC544\uB3D9/\uCCAD\uC18C\uB144 \uC815\uC2E0\uAC74\uAC15 \uC0AC\uC5C5, \uC815\uC2E0\uAC74\uAC15\uC99D\uC9C4\uC0AC\uC5C5, \uC815\uC2E0\uBCF4\uAC74 \uD658\uACBD\uC870\uC131\uC0AC\uC5C5 \uC9C4\uD589."}],gangnam:[{name:"\uC11C\uC6B8\uACFC\uD559\uAE30\uC220\uC0C8\uC77C\uC13C\uD130(\uACBD\uB825\uAC1C\uBC1C\uD615)",address:"\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C7\uAE38 7-0",tel:"02-6258-5012",web:"https://www.wiset.or.kr/main.jsp",desc:"\uC5EC\uC131\uACFC\uD559\uAE30\uC220\uC778 \uBC95/\uC81C\uB3C4 \uC6B4\uC601 \uC9C0\uC6D0, \uC5EC\uC131\uACFC\uD559\uAE30\uC220\uC778 \uC77C\uC790\uB9AC \uC9C0\uC6D0, \uC5EC\uC131\uACFC\uD559\uAE30\uC220\uC778 \uAD50\uC721/\uACBD\uB825\uC9C0\uC6D0, \uC774\uACF5\uACC4 \uC5EC\uC131\uC778\uC7AC \uC721\uC131, \uC5F0\uB300 \uAD50\uB958/\uD611\uB825 \uBC0F \uD3EC\uC0C1 \uC0AC\uC5C5, \uC815\uCC45\uC5F0\uAD6C \uC870\uC0AC \uBC0F \uD3EC\uB7FC, \uACFC\uD559\uAE30\uC220 \uC820\uB354 \uD601\uC2E0 \uB4F1\uC758 \uC0AC\uC5C5 \uC9C4\uD589."},{name:"\uAC15\uB0A8\uAD6C\uC815\uC2E0\uAC74\uAC15\uBCF5\uC9C0\uC13C\uD130",address:"\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uC77C\uC6D09\uAE38 38",tel:"02-2226-0344",web:"http://www.smilegn.kr/design/default/intro.htm",desc:"\uC815\uC2E0\uAC74\uAC15 \uC11C\uBE44\uC2A4 \uBC0F \uC9C8\uD658\uAD00\uB9AC\uAC00 \uD544\uC694\uD55C \uAC15\uB0A8\uAD6C \uC8FC\uBBFC\uC744 \uB300\uC0C1\uC73C\uB85C \uCD08\uB9AC\uC0C1\uB2F4 \uBC0F \uC0AC\uB840\uAD00\uB9AC \uC11C\uBE44\uC2A4, \uC815\uC2E0\uAC74\uAC15\uC99D\uC9C4 \uC0AC\uC5C5 (\uC0B0\uD6C4\uC6B0\uC6B8\uC99D \uC608\uBC29 \uD504\uB85C\uADF8\uB7A8, \uAC31\uB144\uAE30 \uC6B0\uC6B8\uC99D \uC608\uBC29 \uD504\uB85C\uADF8\uB7A8), \uC18C\uC544\uCCAD\uC18C\uB144 \uC815\uC2E0\uAC74\uAC15\uC99D\uC9C4 \uC0AC\uC5C5, \uC9C0\uC5ED\uC0AC\uD68C \uC9C4\uB2E8\uD3C9\uAC00 \uB4F1\uC758 \uC0AC\uC5C5 \uC9C4\uD589."},{name:"\uAC15\uB0A8\uAD6C\uC5EC\uC131\uB2A5\uB825\uAC1C\uBC1C\uC13C\uD130",address:"\uC11C\uC6B8\uC2DC \uAC15\uB0A8\uAD6C \uBD09\uC740\uC0AC\uB85C320",tel:"02-544-8440",web:"http://www.herstory.or.kr/",desc:"\uC5EC\uC131 \uCDE8\u2022\uCC3D\uC5C5 \uBC15\uB78C\uD68C, \uACBD\uB825\uB2E8\uC808 \uC5EC\uC131\uC744 \uC704\uD55C \uC7AC\uCDE8\uC5C5 \uD504\uB85C\uADF8\uB7A8, \uC9C4\uB85C\uCF54\uCE6D \uD504\uB85C\uADF8\uB7A8 \uC81C\uACF5, \uD559\uC810 \uC740\uD589\uC81C \uD504\uB85C\uADF8\uB7A8 \uC6B4\uC601, \uC5EC\uC131 \uCC3D\uC5C5\uC744 \uC704\uD55C \uC2DC\uC124 \uC9C0\uC6D0 \uB4F1\uC758 \uC0AC\uC5C5 \uC9C4\uD589. (\uC9C1\uC5C5\uAE30\uCD08\uB2A5\uB825\uAC1C\uBC1C, \uC790\uACA9\uC99D\uAD50\uC721, \uCDE8\uC5C5\uCC3D\uC5C5, \uC804\uBB38\uAC00 \uC591\uC131, \uBBF8\uB2C8\uAC15\uC88C, \uBB34\uB8CC\uAC15\uC88C, \uC815\uBD80\uC9C0\uC6D0\uD504\uB85C\uADF8\uB7A8, \uD559\uC810\uC740\uD589\uC81C\uD504\uB85C\uADF8\uB7A8, \uD2B9\uBCC4\uD504\uB85C\uADF8\uB7A8 \uB4F1\uC758 \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uAC15\uC88C\uB97C \uC9C0\uC6D0\uD568.)"}]}}}onSearch(){const slct1=this.shadowRoot.querySelector("#slct1"),slct2=this.shadowRoot.querySelector("#slct2");this.shadowRoot.querySelector(".result").className=`result`;console.log("onSearch");console.log(slct1.value);console.log(slct2.value);if("seoul"===slct1.value&&("seong-dong"===slct2.value||"gangnam"===slct2.value)){this.shadowRoot.querySelector(".result").className=`result show ${slct2.value}`}}render(){return html`
    ${SharedStyles}
    <style>
      :host {
        box-sizing: border-box;
        display: block;
        max-width: 726px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        margin-bottom: 60px;
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      h3, h4, p {
        color: #e5ae0e;
        font-family: "SPMyungJo", serif;
      }
      h3, h4, p {
        margin-left: 38px;
        margin-right: 38px;
      }
      h3 {
        font-size: 26px;
      }
      h4 {
        font-size: 18px;
      }
      div.select-group {
        margin-left: 40px;
        margin-top: 60px;
        margin-bottom: 60px;
      }
      div.select {
        display: inline-block;
        max-width: 300px;
        min-width: 250px;
      }
      select {
        margin-right: 10px;
        font-family: "NotoSansKR", sans-serif;
        width: 100%;
        height: 35px;
        line-height: 35px;
        border: 2px solid #e5ae0e;
        border-radius: 10px;
      }
      div.result p {
        color: black;
        font-family: "NotoSansKR", sans-serif;
        font-size: 16px;
      }
      div.result .res {
        padding: 20px;
        background-color: #f7f6f4;
        margin-left: 38px;
        margin-right: 38px;
      }
      div.result .res{
        display: none;
      }
      div.result.show .res{
        display: block;
      }
      div.result.show.gangnam > .seong-dong {
        display: none;
      }
      div.result.show.seong-dong > .gangnam {
        display: none;
      }
      p.info span {
        font-size: 14px;
        color: #b3a090;
      }
      p.info a, p.info a:visited {
        font-size: 14px;
        color: #b3a090;
      }
      div.res {
        margin-bottom: 40px;
      }
      hr {
        display: block;
        height: 2px;
        border: 0;
        border-top: 2px solid #ded5cd;
        margin: 1em 0;
        padding: 0;
      }
      
      @media screen and (max-width: 360px) {
        :host {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        #search-form {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        div.info {
          padding-bottom: 30px;
        }
        #slct1 {
          margin-bottom: 20px;
        }
        h3, h4, p {
          margin-left: 20px;
          margin-right: 20px;
        }
        legend {
          margin-left: 10px;
        }
        .button {
          margin-left: 20px;
          margin-right: 20px;
        }
        div.result .res {
          margin-left: 0;
          margin-right: 0;
        }
        p{
          word-break: break-word;
        }
      }
    </style>
    <div id="search-form">
      <h3>
        <span>중년 여성을 위한</span><br />
        <span>지역별 지원 기관 찾기</span>
      </h3>
      <P>원화는 지역을 검색하고<br />도움받을 수 있는 기관을 찾아보세요</P>
      <div class="select-group">
        <div class="select">
          <select name="slct" id="slct1" @change="${e=>this.onSearch(e)}">
            <option>시·도 선택</option>
            <option value="seoul">서울특별시</option>
            <option value="gangwon">강원도</option>
            <option value="gyeongi">경기도</option>
          </select>
        </div>
        <div class="select">
          <select name="slct" id="slct2" @change="${e=>this.onSearch(e)}">
            <option>시·군·구 선택</option>
            <option value="gangnam">강남구</option>
            <option value="gangdong">강동구</option>
            <option value="seong-dong">성동구</option>
          </select>
        </div>
      </div>
      <div class="result">
        ${this.db.seoul["seong-dong"].map(v=>{return html`
          <style>
          </style>
          <div class="res seong-dong show">
            <h4>${v.name}</h4>
            <hr size="2px" />
            <p>${v.desc}</p>
            <p class="info">
              <span>${v.address}</span><br/>
              <span>${v.tel}</span><br/>
              <span><a href="${v.web}">${v.web}</a></span><br/>
            </p>
          </div>`})}
        ${this.db.seoul.gangnam.map(v=>{return html`
          <style>
          </style>
          <div class="res gangnam show">
            <h4>${v.name}</h4>
            <hr size="2px" />
            <p>${v.desc}</p>
            <p class="info">
              <span>${v.address}</span><br/>
              <span>${v.tel}</span><br/>
              <span><a href="${v.web}">${v.web}</a></span><br/>
            </p>
          </div>`})}
        
      </div>
    </div>
    `}}customElements.define("w50-search",W50Search);class W50Pt3 extends LitElement{static get properties(){return{isCurrent:{type:Boolean}}}constructor(){super()}onAfterEnter(context){this.elmid=context.params.elmid}firstUpdated(){const ros=this.shadowRoot.querySelector("#rosenberg"),sea=this.shadowRoot.querySelector("#search");if("rosenberg"===this.elmid){scrollTo(0,ros.offsetTop-102)}else if("search"===this.elmid){scrollTo(0,sea.offsetTop)}else{window.scrollTo(0,0)}}render(){return html`
    ${SharedStyles}
    <style>
    h1, blockquote {
      color: #e5ae0e;
    }
    footer section:first-child {
      padding: 22px 20px 30px;
      background-color: #F7F6F4;
    }

    footer section:first-child ul {
      list-style: disc inside ;
    }
    .credit {
      max-width: 768px;
      margin-left: auto;
      margin-right: auto;
    }
    .credit p {
      margin: 0;
      padding: 0;
      font-size: 15px;
      float: right;
    }
    .credit li span {
      font-family: "NotoSansKR", sans-serif;
      display: inline-block;
      font-size: 15px;
      vertical-align: text-top;
    }
    .credit li:nth-child(3) span {
      height: 45px;
    }
    .credit li:nth-child(3) span:first-child {
      width: 120px;
    }
    .credit li:nth-child(3) span:nth-child(2) {
      width: 158px;
    }
    .credit .content {
      margin-left: 8px;
      color: #B3A090;
    }
    </style>
    <main class="main">
      <section>
        <h1>
          <span class="num">03</span>
          <span class="title">중년 여성을 위하여</span>
        </h1>
        <p>중년 여성의 신체적, 심리적 상태와 가족과의 관계, 경제상황은 개인별로 차이가 있지만 지난 시간에 대한 정리와 다가올 미래에 대한 준비는 그 또래 여성이라면 누구에게나 필요하다. 문제를 해결하는 시작은 현재의 나를 제대로 파악하고, 인정하는 것이다. 그런 후에야 지난 시간을 오롯이 바라보고 정리해 다가올 시간에 대해 긍정적으로 계획할 수 있다. </p>
        <p>이 장에는 이 과정에 도움이 될 두 가지 데이터 서비스를 실었다. 현재의 나를 점검할 수 있는 테스트와 미래의 나를 위한 지지와 지원을 받을 수 사회 기관 리스트. 각자에게 필요한 것이 무엇인지 파악하고 행동으로 옮기는데 필요한 정보다.</p>
      </section>
      <section id="rosenberg">
        <h2><span>로젠버그의 자기존중감</span><br /><span>테스트로 나를 들여다 보세요</span></h2>
        <p>자기존중감은 자신의 쓸모와 가치에 대한 평가와 자신을 인정하고 만족하는 감정을 통합한 개념이다. 자신이 유능하고 가치가 있다고 생각할수록 자기존중감을 높아진다. 건강하고 긍정적인 자기존중감을 갖고 있다면 자신의 힘든 상황을 이겨낼 수 있다.</p>
        <p>아래는 서울사이버대학교 상담센터에서 제공하는 자기존중감검사이다. 로젠버그의 자기존중감검사를 활용한 테스트로 스스로를 얼마나 신뢰하고 존중하는지, 자신의 모습을 얼마나 안정되게 바라보며 확신을 갖고 있는지를 체크할 수 있다. 이를 통해 현재의 나는 어떤 상태인지 들여다보자. 혹 나에 대해 좋은 평가를 하지 못했다면 다시 한번 나를 다독이며 일으켜줄 때라고 생각하면 된다.</p>
        <w50-rosen></w50-rosen>
      </section>
      <section id="search">
        <h2>
          중년의 어려움 함께 해결해요<br>
          중년 여성을 위한 전국 시군구별<br>
          사회적 지원, 의료 서비스
        </h2>
        <p>갱년기 여성을 위한 건강 교육을 해주는 보건소 프로그램부터 가정 내 관계 개선을 위한 프로그램을 운영하는 건강가정지원센터, 취업에 관한 지원이 가능한 여성개발원 등 찾아보면 중년 여성의 고민을 함께 나눌 다양한 기관이 있다는 걸 알고 있는가. 같은 상황을 겪고 있는 여성들을 만나 커뮤니티를 꾸릴 수도 있다. 당신에게 지금 필요한 지원과 지지는 무엇인지 생각해 본 후, 지역별 관련 서비스 기관을 찾아보자.</p>
        <w50-search></w50-search>
        <footer class="footer">
          <div class="credit">
            <p clss="issue-date">발행일: 2018.11.01.</p>
            <ul>
              <li><span class="title">기획</span><span class="content">김현주</span></li>
              <li><span class="title">취재</span><span class="content">류진</span></li>
              <li><span class="title">데이터 수집·분석</span><span class="content">권성은, 김진아, 이보경, 이승진, 최유빈</span></li>
              <li><span class="title">디자인</span><span class="content">구도연</span></li>
              <li><span class="title">개발</span><span class="content">임기완</span></li>
              <li><span class="title">영상·일러스트</span><span class="content">VCRWORKS</span></li>
            </ul>
          </div>
        </footer>
      </section>
      <section style="padding: 0;"></section>
    </main>
    `}}customElements.define("w50-pt3",W50Pt3);class W50App extends LitElement{static get properties(){return{currentPart:{type:Number}}}constructor(){super();const partRoutes=[{path:"/",component:"w50-pt1",caption:"\uC5C4\uB9C8\uB294 \uC544\uD504\uB2E4"},{path:"/pt2",component:"w50-pt2",caption:"\uB0B4 \uC790\uB9AC\uAC00 \uC5C6\uB2E4"},{path:"/pt3",component:"w50-pt3",caption:"\uC911\uB144 \uC5EC\uC131\uC744 \uC704\uD558\uC5EC"}];this.partRoutes=partRoutes;const routes=partRoutes.concat([{path:"/pt3/:elmid",component:"w50-pt3"},{path:"(.*)",component:"w50-404"}]);this.routes=routes;this.currentPart=this.getCurrentPart()}getPathname(){return location.pathname}getCurrentPart(){const path=this.getPathname();let part=path[3];part=part?part:"/";return part}setRoutes(r){const router=new Router(this.shadowRoot.querySelector("#outlet"));router.setRoutes(r)}firstUpdated(){this.setRoutes(this.routes);window.addEventListener("vaadin-router-location-changed",()=>{this.currentPart=this.getCurrentPart()});const h=this.shadowRoot.querySelector("nav"),d=this.shadowRoot.querySelector("w50-pt0");let stuck=!1;window.onscroll=function(){let distance=h.offsetTop-window.pageYOffset,offset=window.pageYOffset,stickPoint=d.clientHeight;if(0>=distance&&!stuck){h.style.position="fixed";h.style.top="0";stuck=!0}else if(stuck&&offset<=stickPoint){h.style.position="static";stuck=!1}}}render(){return html`
    <style>
      :host {
        --not-current: #b3a090;
        --point-pt1: #669aa7;
        --point-pt2: #d4644a;
        --point-pt3: #e5ae0e;
        
        font-family: "NotoSansKR";
        font-weight: 500;
        font-style: normal;
        
        display: flex;
        flex-direction: column;
      }
      nav {
        width: 100%;
        height: 102px;
        display: block;
        order: 2;
        z-index: 999;
      }
      #outlet {
        order: 3;
      }
    </style>
    <w50-pt0></w50-pt0>
    <nav><w50-nav .currentPart="${"/"===this.currentPart?0:this.currentPart-1}" .routes="${this.partRoutes}" ></w50-nav></nav>
    <div id="outlet"></div>
    `}}customElements.define("w50-app",W50App)});