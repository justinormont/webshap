/**
 * Common types.
 */

import type { Tensor3D } from '@tensorflow/tfjs';

export type ImageWorkerMessage =
  | {
      command: 'startLoadModel';
      payload: {
        url: string;
      };
    }
  | {
      command: 'finishLoadModel';
      payload: Record<string, never>;
    }
  | {
      command: 'startPredict';
      payload: {
        inputImageData: ImageData;
      };
    }
  | {
      command: 'finishPredict';
      payload: {
        predictedProb: Float32Array;
      };
    }
  | {
      command: 'startExplain';
      payload: {
        inputImageData: ImageData;
        inputImageSeg: ImageSegmentation;
      };
    }
  | {
      command: 'finishExplain';
      payload: {
        shapValues: number[][];
      };
    };

export interface TextExplainResult {
  inputText: string;
  tokenWords: string[];
  shapValues: number[];
}

export interface TextPredictionResult {
  inputText: string;
  tokenWords: string[];
  probs: number[];
}

export type TextWorkerMessage =
  | {
      command: 'startLoadModel';
      payload: {
        url: string;
      };
    }
  | {
      command: 'finishLoadModel';
      payload: Record<string, never>;
    }
  | {
      command: 'startPredict';
      payload: {
        inputText: string;
      };
    }
  | {
      command: 'finishPredict';
      payload: {
        result: TextPredictionResult;
      };
    }
  | {
      command: 'startExplain';
      payload: {
        inputText: string;
      };
    }
  | {
      command: 'finishExplain';
      payload: {
        result: TextExplainResult;
      };
    };

type FeatureType = 'cont' | 'cat';

export interface ImageSegmentation {
  segData: ImageData;
  segRGBData: ImageData;
  segSize: number;
}

export interface LoadedImage {
  imageData: ImageData;
}

export interface SHAPRow {
  index: number;
  shap: number;
  name: string;
  fullName: string;
}

export interface TabularContFeature {
  name: string;
  displayName: string;
  desc: string;
  value: number;
  requiresInt: boolean;
  requiresLog: boolean;
}

export interface TabularCatFeature {
  name: string;
  displayName: string;
  desc: string;
  levelInfo: {
    [key: string]: [string, string];
  };
  allLevels: CatLevel[];
  value: string;
}

interface CatLevel {
  level: string;
  displayName: string;
}

export interface TabularData {
  xTrain: number[][];
  yTrain: number[];
  xTest: number[][];
  yTest: number[];
  featureNames: string[];
  featureTypes: FeatureType[];
  featureInfo: { [key: string]: [string, string] };
  featureLevelInfo: {
    [key: string]: {
      [key: string]: [string, string];
    };
  };
  featureRequiresLog: string[];
  featureRequireInt: string[];
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Padding {
  top: number;
  bottom: number;
  left: number;
  right: number;
}
