

function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
  if(parseInt(respuest)==this.correcta){
        var reto;
        alert("Es correcta");
        reto=true;
        return reto
        }else{
         	alert("Es falso");
          	return reto
            }
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
        this.pregun=pregun;

        this.respuestas=[];

        this.respuestas[0]=respuesta1;
        this.respuestas[1]=respuesta2;
        this.respuestas[2]=respuesta3;
        this.respuestas[3]=respuesta4;

        this.correcta=parseInt(correcta);
        this.ocupado=false;
        this.valuap=valuap;



}
var retorno=[];
var preguntas=[];

/* En esta parte incluiran sus preguntas debes ser mas de 10 para que se pueda ajecutar
el script
*/
/*La primer parte de las comiilas pertenece a la pregunta las siguientes a las respuestas pertintenes y el ultimo valor entero
pertence al numero de la respuesta correcta, por ejemplo;
RESPUESTA 1 = 0 ;RESPUESTA 2 = 1 ;RESPUESTA 3 = 2 ;RESPUESTA 4 = 3
preguntas[0]=new pregunta("¿PREGUNTA GENERICA 1?","RESPUESTA 1","RESPUESTA 2","RESPUESTA 3","RESPUESTA 4",2);
La respuesta correcta es RESPUESTA 3 ya que su valor asignado es 2*/
preguntas[0]=new pregunta("°¿Qué operaciones se pueden hacer en un computador de residuos en menor tiempo?:"," Suma, sustracción y multiplicación"," Multiplicación, exponencial y logarítmica ","Suma, sustracción y logarítmica"," Sustracción, logarítmica y exponencial ",0);

preguntas[1]=new pregunta(" ¿En que se pueden clasificarlos sistemas numéricos? "," Naturales y reales "," Reales y complejos "," Posicionales y no posicionales "," Complejos y no posicionales ",2);

preguntas[2]=new pregunta(" ¿Hasta cuando fueron posibles los números posicionales?" ," Con la invención de la calculadora "," Cuando los romanos cayeron ","Cuando los hindúes introdujeron el concepto del número 0 "," Cuando descubrieron los complejos ",2);

preguntas[3]=new pregunta(" ¿Cómo se obtiene los sistemas numéricos decimal y binario? "," 5^i y 3^i "," 9^i y 5^i "," 2^i y 9^i "," 10^i y 2^i ",3);

preguntas[4]=new pregunta(" ¿Cómo se define el rango ? "," Se define como el máximo intervalo en el que cada entero se puede representar de manera única. ","La amplitud entre positivos y negativos "," El dominio del sistema "," La convergencia del sistema ",0);

preguntas[5]=new pregunta(" ¿Cómo se define la unicidad? ","Como todos los números iguales"," Si cada número en el sistema se puede representar de una sola manera."," Es solo un numero "," La unión de varios números ",1);

preguntas[6]=new pregunta(" ¿Cuáles son 3 ventajas del sistema decimal y binario? "," -1.La comparación algebraica de los 2 números se puede mecanizar con facilidad   2. El rango de estos sistemas numéricos se puede extender al añadir mas posiciones de dígitos  3. La detección de rebasamiento es fáci "," 1.Se pude contar mejor   2. El rango de estos sistemas numéricos se puede extender al añadir mas posiciones de dígitos  3. La detección de rebasamiento es fáci "," 1.La división es mas fácil  2. El rango de estos sistemas numéricos se puede extender al añadir mas posiciones de dígitos  3. La exponencializacion es sencilla "," Ninguna de las anteriores",0);

preguntas[7]=new pregunta(" ¿Cuáles son 2 desventajas del sistema de residuos? "," 1. El tiempo aumenta mucho 2. Las operaciones son mas complejas "," 1.La sumas y resta son mas complicadas  2. No se pueden expresar números asi "," 1.La comparación de los números es difícil  2. Es difícil de terminar si ha ocurrido un rebasamiento "," Ninguna de las anteriores",2);

preguntas[8]=new pregunta(" ¿Cómo se le llama a esta representación <x1,x2,x3,…,xr>=<x mod m1,x mod m2, x mod m3,…,x mod mr>? "," Representacion compleja "," Representacion simple "," Representacion natural "," Representacion modular ",3);

preguntas[9]=new pregunta(" ¿Cómo se puede expresar Z30? "," Z2 x Z3 xZ5 "," Z15 x Z15 "," Z10 x Z15 X Z5 "," Z2 x Z4 x Z6 ",0);

preguntas[10]=new pregunta(" Usando la tabla ¿Cómo se puede expresar el 14 con Z30? "," (0,5,3) "," (10,2,8) "," (0,2,4) "," (2,0,3) ",2);

preguntas[11]=new pregunta(" ¿Que dice la ley de cancelación de la multiplicacion? "," (ca) mod m=(cb) mod m ? a mod m = b mod m "," (ca) mod m=(cb) mod m ? c mod m = c mod m "," ca) mod m=(ca) mod m ? a mod m =cb mod m "," Ninguna de las anteriores",0);

preguntas[12]=new pregunta(" ¿Cuál es el teorema de Fermat? "," a^n mod m = m mod a "," a^m mod m = a mod m "," a^a mod m = a mod a"," m^a mod m = a mod m ",1);

preguntas[13]=new pregunta(" ¿Por qué es conveniente usar los residuos en las operaciones básicas? "," Remplazan los números por letras ","Se utiliza en menor memoria ","El tiempo de ejecución es menor "," Ninguna de las anteriores",2);

preguntas[14]=new pregunta("  Usando la tabla, ¿Cuál es la representación del 6 conZ30? "," (0,10,1) "," (0,1,1) "," (0,0,1) "," (1,1,1) ",2);
