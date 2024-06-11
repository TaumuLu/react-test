export { vertex } from './vertex'

export const fragment = `
uniform sampler2D uSampler;
varying vec2 vTextureCoord;
varying vec2 vVertexPosition;

void main() {
    // 计算像素点与圆心的距离
    float distance = length(vVertexPosition - vec2(0.5));

    // 如果距离大于圆的半径，则丢弃该像素
    if (distance > 0.5) {
        discard;
    }

    // 输出纹理颜色
    gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`
