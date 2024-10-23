export interface VehicleInterface{
    id: number;
    marca: string;
    modelo: string;
    tipoVehiculo: string;
    vin: string;
    estado: boolean;
    fecha: Date;
    modelo_basico: string;
    detalle: any[];
}