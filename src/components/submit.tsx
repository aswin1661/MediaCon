import "../index.css"
import { cn } from "@/lib/utils";
export default function Submit({className,}:{className?:string} ) {
    return(
<a class={cn("fancy", className)} href="#">
  <span class="top-key"></span>
  <span class="text">Buy Tickets</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>
    )
}   