self.onmessage=async t=>{const s=await crypto.subtle.digest("SHA-256",t.data),a=[...new Uint8Array(s)].map(e=>e.toString(16).padStart(2,"0")).join("");self.postMessage(a)};
