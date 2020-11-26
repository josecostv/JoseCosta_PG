#version 400 core
in vec3 ourColor;
in vec2 TexCoord;
out vec4 color;

// Texture sampler
uniform sampler2D ourTexture1;

void main()
{
    color = texture(ourTexture1, TexCoord); // * vec4(ourColor, 1.0);

	float corModificadora = 135;
	
	color.r = color.r + corModificadora;
	color.g = color.g + corModificadora;
	color.b = color.b + corModificadora;

}