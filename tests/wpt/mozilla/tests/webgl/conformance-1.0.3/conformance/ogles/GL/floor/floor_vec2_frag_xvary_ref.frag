
/*
** Copyright (c) 2012 The Khronos Group Inc.
**
** Permission is hereby granted, free of charge, to any person obtaining a
** copy of this software and/or associated documentation files (the
** "Materials"), to deal in the Materials without restriction, including
** without limitation the rights to use, copy, modify, merge, publish,
** distribute, sublicense, and/or sell copies of the Materials, and to
** permit persons to whom the Materials are furnished to do so, subject to
** the following conditions:
**
** The above copyright notice and this permission notice shall be included
** in all copies or substantial portions of the Materials.
**
** THE MATERIALS ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
** EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
** MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
** IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
** CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
** TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
** MATERIALS OR THE USE OR OTHER DEALINGS IN THE MATERIALS.
*/


#ifdef GL_ES
precision mediump float;
#endif
varying vec4 color;

vec2 floor_ref(vec2 x)
{
    if(x[0] >= 0.0)
        x[0] = float(int(x[0]));
    else
        x[0] = float(int(x[0]) - 1);
    if(x[1] >= 0.0)
        x[1] = float(int(x[1]));
    else
        x[1] = float(int(x[1]) - 1);
    return x;
}

void main (void)
{
    vec2 c = 10.0 * 2.0 * (color.rg - 0.5);
    gl_FragColor = vec4((floor_ref(c) + 10.0) / 20.0, 0.0, 1.0);
}