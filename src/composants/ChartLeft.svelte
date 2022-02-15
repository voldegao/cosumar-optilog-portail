<script>
     import { LineChart } from "@carbon/charts-svelte";
  import "@carbon/charts/styles.min.css";
  import "carbon-components/css/carbon-components.min.css";

</script>

<div class="w-1/2 mx-1 flex flex-col bg-white mt-4 border shadow-sm rounded-md">
    <div class="p-2">
        <LineChart
            data={[
                { group: "Qty", value: 65000,key: "Restocking",},
                { group: "Qty", value: 29123,key: "Restocking1" },
                { group: "Qty", value: 35213,key: "Restocking2" },
                { group: "Qty", value: 51213,key: "Restocking3" },
                { group: "Qty", value: 16932,key: "Restocking4" },
            ]}
            options={{
                title: "Taux de Services",
                height: "300px",
                axes: {
                left: { mapsTo: "value" },
                bottom: { mapsTo: "key", scaleType: "labels" },
                },
            }}
    />

    </div>
    
</div>