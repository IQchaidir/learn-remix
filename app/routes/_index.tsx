import type { MetaFunction } from "@remix-run/node"
import { Button } from "../components/ui/button"
import { Slider } from "../components/ui/slider"

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

export default function Index() {
    return (
        <div>
            <Button>testing button</Button>
            <Slider defaultValue={[33]} max={100} step={1} />
        </div>
    )
}
