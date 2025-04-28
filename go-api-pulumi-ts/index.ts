import * as pulumi from "@pulumi/pulumi";
import * as digitalocean from "@pulumi/digitalocean";

const droplet = new digitalocean.Droplet("go-api-droplet", {
    image: "docker-20-04",
    region: "sgp1",
    size: "s-1vcpu-1gb",
    sshKeys: ["44683034"],
    userData: `#!/bin/bash
docker run -d -p 80:8080 akkharaphopmakanat/test-go-app:latest
`,
});

export const dropletIp = droplet.ipv4Address;
