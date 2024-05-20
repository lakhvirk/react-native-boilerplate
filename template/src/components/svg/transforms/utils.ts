export const camelCase = (value: string) =>
  value.replace(/-([a-z])/g, g => g[1].toUpperCase());

export const camelCaseNodeName = ({
  nodeName,
  nodeValue,
}: {
  nodeName: string;
  nodeValue: any;
}) => ({
  nodeName: camelCase(nodeName),
  nodeValue,
});

export const removePixelsFromNodeValue = ({
  nodeName,
  nodeValue,
}: {
  nodeName: string;
  nodeValue: any;
}) => ({
  nodeName,
  nodeValue: nodeValue.replace('px', ''),
});

export const getEnabledAttributes =
  (enabledAttributes: string[]) =>
  ({ nodeName }: { nodeName: string }) =>
    enabledAttributes.includes(camelCase(nodeName));
