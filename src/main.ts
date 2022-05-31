import * as k8s from "@kubernetes/client-node";

const KUBE_CONFIG_PATH = "UPDATE_YOUR_FULL_PATH_HERE/.kube/config";

(async function main() {
  const kc = new k8s.KubeConfig();
  kc.loadFromFile(KUBE_CONFIG_PATH);

  const client = kc.makeApiClient(k8s.CoreV1Api);
  const response = await client.listNamespace();
  const namespaces = response.body.items.map((n) => n.metadata?.name);

  console.log(kc.currentContext, namespaces);
})();
