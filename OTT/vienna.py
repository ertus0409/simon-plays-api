import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import math
import sys

#songs = pd.read_csv('./../OTT/data.csv')
songs = pd.read_csv('./OTT/data.csv')
songs.drop(['duration_ms', 'key', 'loudness', 'mode', 'tempo', 'time_signature', 'target'], axis=1, inplace=True)
x0 = 0.00
x1 = 1.00
x2 = 0.00
x3 = 1.00
x4 = 0.00
x5 = 0.00
x6 = 0.00

x = [x0, x1, x2, x3, x4, x5, x6]
n, d = songs.shape
songs['s'] = pd.Series(0.0, index = songs.index)
for i in range(n):
    s = 0
    for j in range(7):
        s += (songs.iloc[i, j+1] - x[j])*(songs.iloc[i, j+1] - x[j])
    s = math.sqrt(s)
    songs.iat[i,10] = s
songs = songs.sort_values('s')
result = [None] * 10
for k in range(10):
    song_title = songs.iloc[k, 8]
    artist = songs.iloc[k, 9]
    result[k] = {song_title: artist}

print(result)
sys.stdout.flush()
