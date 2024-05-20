import React from 'react';
import {
  Circle,
  ClipPath,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Text,
  TextPath,
  TSpan,
} from 'react-native-svg';
import {
  camelCaseNodeName,
  getEnabledAttributes,
  removePixelsFromNodeValue,
} from '@/components/SVG/transforms/utils';

const svgToElementMaps = {
  circle: Circle,
  clipPath: ClipPath,
  ellipse: Ellipse,
  g: G,
  text: Text,
  textPath: TextPath,
  path: Path,
  polygon: Polygon,
  polyline: Polyline,
  line: Line,
  linearGradient: LinearGradient,
  radialGradient: RadialGradient,
  rect: Rect,
  stop: Stop,
  tspan: TSpan,
};

const acceptedSVGElements = Object.keys(svgToElementMaps);

const elementAttributes = {
  G: ['id'],
  Circle: ['cx', 'cy', 'r'],
  Path: ['d'],
  Rect: ['width', 'height'],
  Line: ['x1', 'y1', 'x2', 'y2'],
  LinearGradient: ['x1', 'y1', 'x2', 'y2', 'id', 'gradientUnits'],
  RadialGradient: ['cx', 'cy', 'r', 'id', 'gradientUnits'],
  Stop: ['offset'],
  Ellipse: ['cx', 'cy', 'rx', 'ry'],
  Text: ['fontFamily', 'fontSize', 'fontWeight'],
  Polygon: ['points'],
  Polyline: ['points'],
  Common: [
    'fill',
    'fillOpacity',
    'stroke',
    'strokeWidth',
    'strokeOpacity',
    'opacity',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeDasharray',
    'strokeDashoffset',
    'x',
    'y',
    'rotate',
    'scale',
    'origin',
    'originX',
    'originY',
  ],
};

const acceptedAttributes = [
  'fill',
  'fillOpacity',
  'stroke',
  'strokeWidth',
  'strokeOpacity',
  'opacity',
  'strokeLinecap',
  'strokeLinejoin',
  'strokeDasharray',
  'strokeDashoffset',
  'x',
  'y',
  'rotate',
  'scale',
  'origin',
  'originX',
  'originY',
];

// Remove empty strings from children array
const trimElementChildren = (children: React.ReactNode[]) => {
  children.forEach(child => {
    if (typeof child === 'string') {
      if (child.trim.length === 0) {
        children.splice(children.indexOf(child), 1);
      }
    }
  });
};

const getComponentAttrs = (
  { attributes }: { attributes: { nodeName: string; nodeValue: any }[] },
  enabledAttributes: string[],
  fillColor: string,
) =>
  Array.from(attributes)
    .map(camelCaseNodeName)
    .map(removePixelsFromNodeValue)
    .filter(getEnabledAttributes(enabledAttributes.concat(acceptedAttributes)))
    .reduce(
      (acc, { nodeName, nodeValue }) => ({
        ...acc,
        [nodeName]:
          nodeName === 'fill' && nodeValue !== 'none' ? fillColor : nodeValue,
      }),
      {},
    );

const createSVGElement = (
  node: any,
  children: React.ReactNode[],
  fillColor: string,
  key: number,
) => {
  trimElementChildren(children);
  // @ts-ignore
  const Element = svgToElementMaps[node.nodeName];
  const props = getComponentAttrs(
    node,
    // @ts-ignore
    [...elementAttributes[Element.displayName], ...elementAttributes.Common],
    fillColor,
  );

  return <Element key={key} {...props} />;
};

const inspectNode = (node: any, fillColor: string, key: number) => {
  // Only process accepted elements
  if (!acceptedSVGElements.includes(node.nodeName)) {
    return null;
  }

  // process the xml node
  const arrayElements: any[] = [];

  // if have children process them.
  // Recursive function.
  if (node.childNodes && node.childNodes.length > 0) {
    [...node.childNodes].forEach((child: any, index: number) => {
      const isTextValue = child.nodeValue;
      if (isTextValue) {
        arrayElements.push(child.nodeValue);
      } else {
        const nodo = inspectNode(child, fillColor, index);
        if (nodo != null) {
          arrayElements.push(nodo);
        }
      }
    });
  }

  return createSVGElement(node, arrayElements, fillColor, key);
};

export { inspectNode as transformToElements };
