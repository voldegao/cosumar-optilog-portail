<script>
	import "@carbon/charts/styles.min.css";
	import "carbon-components/css/carbon-components.min.css";
	import { BarChartSimple } from "@carbon/charts-svelte";
</script>

<div class="w-1/2 mx-1 flex flex-col bg-white mt-4 border shadow-sm rounded-md">
    <div class="p-2">

        <BarChartSimple
                data={[
                {
                    "group": "Qty",
                    "value": 65000
                },
                {
                    "group": "More",
                    "value": 29123
                },
                {
                    "group": "Sold",
                    "value": 35213
                },
                {
                    "group": "Restocking",
                    "value": 51213
                },
                {
                    "group": "Misc",
                    "value": 16932
                }
            ]}
                options={{
                "title": "Nombre de Camions",
                "axes": {
                    "left": {
                        "mapsTo": "value"
                    },
                    "bottom": {
                        "mapsTo": "group",
                        "scaleType": "labels"
                    }
                },
                "height": "300px"
            }}
        />
    </div>
</div>