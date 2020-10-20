
import { Server} from "miragejs";
export function makeServer({} = {}) {
  let server = new Server({
    routes() {
      this.namespace = "api";
      this.get("updatecounter", () => {
        return 34;
      },{
        timing:1000
      });
    },
  });
}
 