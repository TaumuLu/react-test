export { vertex } from './vertex'

// Fragment shader, in real use this would be much cleaner when loaded from a file
// or embedded into the application as data resource.
export const fragment = `
varying vec2 vTextureCoord;
varying vec2 vVertexPosition;

uniform sampler2D uSampler;
uniform float angle;

#define PI 3.1415926538

void main(void)
{
    vec2 coord = vVertexPosition * vec2(2.0, -2.0) + vec2(-1.0,1.0);
    if (coord.y != 0.0) {
        float curAngle = atan(coord.x/coord.y);
        if (coord.y < 0.0) {
            curAngle += PI;
        } else if(coord.x < 0.0) {
            curAngle += PI * 2.0;
        }

        if (curAngle < angle)
        {
            discard;
        }
    } else {
        if (angle > PI * 1.5) {
            discard;
        } else if (angle > PI * 0.5 && coord.x > 0.0) {
            discard;
        }
    }

    gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`
